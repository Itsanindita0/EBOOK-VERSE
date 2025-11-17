const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Create pdfs directory if it doesn't exist
const pdfsDir = path.join(__dirname, 'public', 'pdfs');
if (!fs.existsSync(pdfsDir)) {
  fs.mkdirSync(pdfsDir, { recursive: true });
}

// Books with reliable PDF download URLs from Internet Archive
const books = [
  {
    filename: 'pride-and-prejudice.pdf',
    url: 'https://archive.org/download/prideandprejud00aust/prideandprejud00aust.pdf',
    title: 'Pride and Prejudice'
  },
  {
    filename: 'sherlock-holmes.pdf',
    url: 'https://archive.org/download/adventuresofsher00doyl/adventuresofsher00doyl.pdf',
    title: 'The Adventures of Sherlock Holmes'
  },
  {
    filename: 'dracula.pdf',
    url: 'https://archive.org/download/dracula00stok/dracula00stok.pdf',
    title: 'Dracula'
  },
  {
    filename: 'frankenstein.pdf',
    url: 'https://archive.org/download/frankenstein00shel/frankenstein00shel.pdf',
    title: 'Frankenstein'
  },
  {
    filename: 'moby-dick.pdf',
    url: 'https://archive.org/download/mobydickorwhale00melv/mobydickorwhale00melv.pdf',
    title: 'Moby Dick'
  },
  {
    filename: 'republic.pdf',
    url: 'https://archive.org/download/RepublicByPlato/Republic%20by%20Plato.pdf',
    title: 'The Republic'
  },
  {
    filename: 'meditations.pdf',
    url: 'https://archive.org/download/meditationsofmarc00marc/meditationsofmarc00marc.pdf',
    title: 'Meditations'
  },
  {
    filename: 'zarathustra.pdf',
    url: 'https://archive.org/download/ThusSpakeZarathustra_201701/Thus%20Spake%20Zarathustra.pdf',
    title: 'Thus Spoke Zarathustra'
  },
  {
    filename: 'origin-of-species.pdf',
    url: 'https://archive.org/download/originofspecies00darw/originofspecies00darw.pdf',
    title: 'On the Origin of Species'
  },
  {
    filename: 'prince.pdf',
    url: 'https://archive.org/download/prince00mach/prince00mach.pdf',
    title: 'The Prince'
  },
  {
    filename: 'art-of-war.pdf',
    url: 'https://archive.org/download/artofwar00sunt/artofwar00sunt.pdf',
    title: 'The Art of War'
  },
  {
    filename: 'as-a-man-thinketh.pdf',
    url: 'https://archive.org/download/asamanthinketh00allegoog/asamanthinketh00allegoog.pdf',
    title: 'As a Man Thinketh'
  },
  {
    filename: 'science-of-getting-rich.pdf',
    url: 'https://archive.org/download/scienceofgetting00watt/scienceofgetting00watt.pdf',
    title: 'The Science of Getting Rich'
  },
  {
    filename: 'benjamin-franklin.pdf',
    url: 'https://archive.org/download/autobiographyofb00fran/autobiographyofb00fran.pdf',
    title: 'The Autobiography of Benjamin Franklin'
  },
  {
    filename: 'frederick-douglass.pdf',
    url: 'https://archive.org/download/narrativeoflifeo00doug/narrativeoflifeo00doug.pdf',
    title: 'Narrative of the Life of Frederick Douglass'
  },
  {
    filename: 'leaves-of-grass.pdf',
    url: 'https://archive.org/download/leavesofgrass00whit/leavesofgrass00whit.pdf',
    title: 'Leaves of Grass'
  },
  {
    filename: 'divine-comedy.pdf',
    url: 'https://archive.org/download/divinecomedy00dant/divinecomedy00dant.pdf',
    title: 'The Divine Comedy'
  },
  {
    filename: 'alice-wonderland.pdf',
    url: 'https://archive.org/download/alicesadventures00carr/alicesadventures00carr.pdf',
    title: "Alice's Adventures in Wonderland"
  },
  {
    filename: 'dorian-gray.pdf',
    url: 'https://archive.org/download/pictureofdoriangr00wild/pictureofdoriangr00wild.pdf',
    title: 'The Picture of Dorian Gray'
  },
  {
    filename: 'great-gatsby.pdf',
    url: 'https://archive.org/download/greatgatsby00fitz/greatgatsby00fitz.pdf',
    title: 'The Great Gatsby'
  }
];

function downloadFile(url, filepath, title, fallbackUrl = null) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    
    const file = fs.createWriteStream(filepath);
    
    protocol.get(url, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        file.close();
        if (fs.existsSync(filepath)) {
          fs.unlinkSync(filepath);
        }
        return downloadFile(response.headers.location, filepath, title, fallbackUrl)
          .then(resolve)
          .catch((err) => {
            // Try fallback if main URL fails
            if (fallbackUrl) {
              console.log(`Trying fallback URL for ${title}...`);
              return downloadFile(fallbackUrl, filepath, title)
                .then(resolve)
                .catch(reject);
            }
            reject(err);
          });
      }
      
      if (response.statusCode !== 200) {
        file.close();
        if (fs.existsSync(filepath)) {
          fs.unlinkSync(filepath);
        }
        // Try fallback if main URL fails
        if (fallbackUrl && response.statusCode === 404) {
          console.log(`Main URL failed for ${title}, trying fallback...`);
          return downloadFile(fallbackUrl, filepath, title)
            .then(resolve)
            .catch(reject);
        }
        reject(new Error(`Failed to download ${title}: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✓ Downloaded: ${title}`);
        resolve();
      });
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(filepath)) {
        fs.unlinkSync(filepath);
      }
      // Try fallback on error
      if (fallbackUrl) {
        console.log(`Error downloading ${title}, trying fallback...`);
        return downloadFile(fallbackUrl, filepath, title)
          .then(resolve)
          .catch(reject);
      }
      reject(err);
    });
  });
}

async function downloadAllPdfs() {
  console.log('Starting PDF downloads...\n');
  
  for (const book of books) {
    const filepath = path.join(pdfsDir, book.filename);
    
    // Skip if file already exists
    if (fs.existsSync(filepath)) {
      console.log(`⊘ Skipped (already exists): ${book.title}`);
      continue;
    }
    
    try {
      await downloadFile(book.url, filepath, book.title, book.fallbackUrl);
      // Small delay to avoid overwhelming the server
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(`✗ Error downloading ${book.title}:`, error.message);
    }
  }
  
  console.log('\n✓ Download process completed!');
}

downloadAllPdfs();

