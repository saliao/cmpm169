let table;
let stands = [];
let PWRStat = [];
let SPDStat = [];
let RNGStat = [];
let PERStat = [];
let PRCStat = [];
let DEVStat = [];
let index = 0;
let arrayofstats = ['PWR','SPD','RNG','STA','PRC','DEV'];
let arrayofdescriptions = ["Jojo's Bizzare Adventure Stands by Destructive Power (PWR)",
                           "Jojo's Bizzare Adventure Stands by Speed (SPD)",
                           "Jojo's Bizzare Adventure Stands by Range (RNG)",
                           "Jojo's Bizzare Adventure Stands by Stamina (STA)",
                           "Jojo's Bizzare Adventure Stands by Precision (PRC)",
                           "Jojo's Bizzare Adventure Stands by Delelopmental Potential (DEV)"];
let clickedStat = arrayofstats[index];
// Define an object to hold stand images
let standImages = {
    'Star Platinum': 'https://saliao.github.io/p5.js-files/Star_Platinum.png',
    'The World': 'https://saliao.github.io/p5.js-files/The_World.png',
    // Add more stand images here for each stand name
    "Anubis": "https://saliao.github.io/p5.js-files/Anubis.png",
    "Atum": "https://saliao.github.io/p5.js-files/Atum.png",
    "Bastet": "https://saliao.github.io/p5.js-files/Bastet.png",
    "Cream": "https://saliao.github.io/p5.js-files/Cream.png",
    "Death Thirteen": "https://saliao.github.io/p5.js-files/Death_Thirteen.png",
    "Geb": "https://saliao.github.io/p5.js-files/Geb.png",
    "High Priestess": "https://saliao.github.io/p5.js-files/High_Priestess.png",
    "Horus": "https://saliao.github.io/p5.js-files/Horus.png",
    "Judgement": "https://saliao.github.io/p5.js-files/Judgement.png",
    "Khnum": "https://saliao.github.io/p5.js-files/Khnum.png",
    "Osiris": "https://saliao.github.io/p5.js-files/Osiris.png",
    "Sethan": "https://saliao.github.io/p5.js-files/Sethan.png",
    "Tenore Sax": "https://saliao.github.io/p5.js-files/Tenore_Sax.png",
    "Tohth": "https://saliao.github.io/p5.js-files/Tohth.png",
    "Dark Blue Moon": "https://saliao.github.io/p5.js-files/Dark_Blue_Moon.png",
    "Emperor": "https://saliao.github.io/p5.js-files/Emperor.png",
    "Ebony Devil": "https://saliao.github.io/p5.js-files/Ebony_Devil.png",
    "Empress": "https://saliao.github.io/p5.js-files/Empress.png",
    "Hanged Man": "https://saliao.github.io/p5.js-files/Hanged_Man.png",
    "Hermit Purple": "https://saliao.github.io/p5.js-files/Hermit_Purple.png",
    "Hierophant Green": "https://saliao.github.io/p5.js-files/Hierophant_Green.png",
    "Justice": "https://saliao.github.io/p5.js-files/Justice.png",
    "Lovers": "https://saliao.github.io/p5.js-files/Lovers.png",
    "Magician's Red": "https://saliao.github.io/p5.js-files/Magician's_Red.png",
    "Silver Chariot": "https://saliao.github.io/p5.js-files/Silver_Chariot.png",
    "Strength": "https://saliao.github.io/p5.js-files/Strength.png",
    "Sun": "https://saliao.github.io/p5.js-files/Sun.png",
    "The Fool": "https://saliao.github.io/p5.js-files/The_Fool.png",
    "Tower of Gray": "https://saliao.github.io/p5.js-files/Tower_of_Gray.png",
    "Wheel of Fortune": "https://saliao.github.io/p5.js-files/Wheel_of_Fortune.png",
    "Yellow Temperance": "https://saliao.github.io/p5.js-files/Yellow_Temperance.png",
    "Achtung Baby": "https://saliao.github.io/p5.js-files/Achtung_Baby.png",
    "Aqua Necklace": "https://saliao.github.io/p5.js-files/Aqua_Necklace.png",
    "Atom Heart Father": "https://saliao.github.io/p5.js-files/Atom_Heart_Father.png",
    "Bad Company": "https://saliao.github.io/p5.js-files/Bad_Company.png",
    "Boy II Man": "https://saliao.github.io/p5.js-files/Boy_II_Man.png",
    "Cheap Trick": "https://saliao.github.io/p5.js-files/Cheap_Trick.png",
    "Cinderella": "https://saliao.github.io/p5.js-files/Cinderella.png",
    "Crazy Diamond": "https://saliao.github.io/p5.js-files/Crazy_Diamond.png",
    "Enigma": "https://saliao.github.io/p5.js-files/Enigma.png",
    "Earth Wind and Fire": "https://saliao.github.io/p5.js-files/Earth_Wind_and_Fire.png",
    "Harvest": "https://saliao.github.io/p5.js-files/Harvest.png",
    "Heaven's Door": "https://saliao.github.io/p5.js-files/Heaven's_Door.png",
    "Highway Star": "https://saliao.github.io/p5.js-files/Highway_Star.png",
    "Killer Queen": "https://saliao.github.io/p5.js-files/Killer_Queen.png",
    "Sheer Heart Attack": "https://saliao.github.io/p5.js-files/Sheer_Heart_Attack.png",
    "Bites the Dust": "https://saliao.github.io/p5.js-files/Bites_the_Dust.png",
    "Love Deluxe": "https://saliao.github.io/p5.js-files/Love_Deluxe.png",
    "Pearl Jam": "https://saliao.github.io/p5.js-files/Pearl_Jam.png",
    "Ratt": "https://saliao.github.io/p5.js-files/Ratt.png",
    "Red Hot Chili Pepper": "https://saliao.github.io/p5.js-files/Red_Hot_Chili_Pepper.png",
    "Super Fly": "https://saliao.github.io/p5.js-files/Super_Fly.png",
    "Surface": "https://saliao.github.io/p5.js-files/Surface.png",
    "The Lock": "https://saliao.github.io/p5.js-files/The_Lock.png",
    "The Hand": "https://saliao.github.io/p5.js-files/The_Hand.png",
    "Echoes (ACT1)": "https://saliao.github.io/p5.js-files/Echoes_ACT1.png",
    "Echoes (ACT2)": "https://saliao.github.io/p5.js-files/Echoes_ACT2.png",
    "Echoes (ACT3)": "https://saliao.github.io/p5.js-files/Echoes_ACT3.png",
    "Star Platinum: The World": "https://saliao.github.io/p5.js-files/Star_Platinum_The World.png",
    "Stray Cat": "https://saliao.github.io/p5.js-files/Stray_Cat.png",
    "Black Sabbath": "https://saliao.github.io/p5.js-files/Black_Sabbath.png",
    "Baby Face": "https://saliao.github.io/p5.js-files/Baby_Face.png",
    "Gold Experience": "https://saliao.github.io/p5.js-files/Gold_Experience.png",
    "Sticky Fingers": "https://saliao.github.io/p5.js-files/Sticky_Fingers.png",
    "Metallica": "https://saliao.github.io/p5.js-files/Metallica.png",
    "Purple Haze": "https://saliao.github.io/p5.js-files/Purple_Haze.png",
    "Moody Blues": "https://saliao.github.io/p5.js-files/Moody_Blues.png",
    "Sex Pistols": "https://saliao.github.io/p5.js-files/Sex_Pistols.png",
    "The Grateful Dead": "https://saliao.github.io/p5.js-files/The_Grateful_Dead.png",
    "Aerosmith": "https://saliao.github.io/p5.js-files/Aerosmith.png",
    "Beach Boy": "https://saliao.github.io/p5.js-files/Beach_Boy.png",
    "Man in the Mirror": "https://saliao.github.io/p5.js-files/Man_in_the_Mirror.png",
    "Baby Face�(GoGo)": "https://saliao.github.io/p5.js-files/Baby_Face_GoGo.png",
    "Chariot Requiem": "https://saliao.github.io/p5.js-files/Chariot_Requiem.png",
    "Clash": "https://saliao.github.io/p5.js-files/Clash.png",
    "Gold Experience Requiem": "https://saliao.github.io/p5.js-files/Gold_Experience_Requiem.png",
    "Green Day": "https://saliao.github.io/p5.js-files/Green_Day.png",
    "King Crimson": "https://saliao.github.io/p5.js-files/King_Crimson.png",
    "Kraft Work": "https://saliao.github.io/p5.js-files/Kraft_Work.png",
    "Little Feet": "https://saliao.github.io/p5.js-files/Little_Feet.png",
    "Mr.President": "https://saliao.github.io/p5.js-files/Mr_President.png",
    "Notorious B.I.G": "https://saliao.github.io/p5.js-files/Notorious_BIG.png",
    "Oasis": "https://saliao.github.io/p5.js-files/Oasis.png",
    "Rolling Stones": "https://saliao.github.io/p5.js-files/Rolling_Stones.png",
    "Soft Machine": "https://saliao.github.io/p5.js-files/Soft_Machine.png",
    "Spice Girl": "https://saliao.github.io/p5.js-files/Spice_Girl.png",
    "Talking Head": "https://saliao.github.io/p5.js-files/Talking_Head.png",
    "White Album": "https://saliao.github.io/p5.js-files/White_Album.png",
    "Whitesnake": "https://saliao.github.io/p5.js-files/Whitesnake.png",
    "C-Moon": "https://saliao.github.io/p5.js-files/C-Moon.png",
    "Jail House Lock": "https://saliao.github.io/p5.js-files/Jail_House_Lock.png",
    "Stone Free": "https://saliao.github.io/p5.js-files/Stone_Free.png",
    "Goo Goo Dolls": "https://saliao.github.io/p5.js-files/Goo_Goo_Dolls.png",
    "Under World": "https://saliao.github.io/p5.js-files/Under_World.png",
    "Sky High": "https://saliao.github.io/p5.js-files/Sky_High.png",
    "Bohemian Rhapsody": "https://saliao.github.io/p5.js-files/Bohemian_Rhapsody.png",
    "Burning Down the House": "https://saliao.github.io/p5.js-files/Burning_Down_the_House.png",
    "Diver Down": "https://saliao.github.io/p5.js-files/Diver_Down.png",
    "Dragon's Dream": "https://saliao.github.io/p5.js-files/Dragon's_Dream.png",
    "Foo Fighters": "https://saliao.github.io/p5.js-files/Foo_Fighters.png",
    "Green, Green Grass of Home": "https://saliao.github.io/p5.js-files/Green_Green_Grass_of_Home.png",
    "Highway to Hell": "https://saliao.github.io/p5.js-files/Highway_to_Hell.png",
    "Kiss": "https://saliao.github.io/p5.js-files/Kiss.png",
    "Jumpin' Jack Flash": "https://saliao.github.io/p5.js-files/Jumpin_Jack_Flash.png",
    "Limp Bizkit": "https://saliao.github.io/p5.js-files/Limp_Bizkit.png",
    "Made in Heaven": "https://saliao.github.io/p5.js-files/Made_in_Heaven.png",
    "Manhattan Transfer": "https://saliao.github.io/p5.js-files/Manhattan_Transfer.png",
    "Marilyn Manson": "https://saliao.github.io/p5.js-files/Marilyn_Manson.png",
    "Planet Waves": "https://saliao.github.io/p5.js-files/Planet_Waves.png",
    "Survivor": "https://saliao.github.io/p5.js-files/Survivor.png",
    "Weather Report": "https://saliao.github.io/p5.js-files/Weather_Report.png",
    "Yo-Yo Ma": "https://saliao.github.io/p5.js-files/Yo-Yo_Ma.png",
    "20th Century Boy": "https://saliao.github.io/p5.js-files/20th_Century_Boy.png",
    "Ball Breaker": "https://saliao.github.io/p5.js-files/Ball_Breaker.png",
    "Boku no Rhythm wo Kiitekure": "https://saliao.github.io/p5.js-files/Boku_no_Rhythm_wo_Kiitekure.png",
    "Catch the Rainbow": "https://saliao.github.io/p5.js-files/Catch_the_Rainbow.png",
    "Chocolate Disco": "https://saliao.github.io/p5.js-files/Chocolate_Disco.png",
    "Civil War": "https://saliao.github.io/p5.js-files/Civil_War.png",
    "Cream Starter": "https://saliao.github.io/p5.js-files/Cream_Starter.png",
    "Dirty Deeds Done Dirt Cheap": "https://saliao.github.io/p5.js-files/Dirty_Deeds_Done_Dirt_Cheap.png",
    "D4C Love Train": "https://saliao.github.io/p5.js-files/D4C_Love_Train.png",
    "Hey Ya!": "https://saliao.github.io/p5.js-files/Hey_Ya!.png",
    "In a Silent Way": "https://saliao.github.io/p5.js-files/In_a_Silent_Way.png",
    "Mandom": "https://saliao.github.io/p5.js-files/Mandom.png",
    "Oh! Lonesome Me": "https://saliao.github.io/p5.js-files/Oh!_Lonesome_Me.png",
    "Scary Monsters": "https://saliao.github.io/p5.js-files/Scary_Monsters.png",
    "Sugar Mountain": "https://saliao.github.io/p5.js-files/Sugar_Mountain.png",
    "Tatoo You!": "https://saliao.github.io/p5.js-files/Tatoo_You!.png",
    "Ticket to Ride": "https://saliao.github.io/p5.js-files/Ticket_to_Ride.png",
    "Tomb of the Boom 1 2 3": "https://saliao.github.io/p5.js-files/Tomb_of_the_Boom_1_2_3.png",
    "Tubular Bells": "https://saliao.github.io/p5.js-files/Tubular_Bells.png",
    "Tusk ACT1": "https://saliao.github.io/p5.js-files/Tusk_ACT1.png",
    "Tusk ACT2": "https://saliao.github.io/p5.js-files/Tusk_ACT2.png",
    "Tusk ACT3": "https://saliao.github.io/p5.js-files/Tusk_ACT3.png",
    "Tusk ACT4": "https://saliao.github.io/p5.js-files/Tusk_ACT4.png",
    "Wired": "https://saliao.github.io/p5.js-files/Wired.png",
    "Born This Way": "https://saliao.github.io/p5.js-files/Born_This_Way.png",
    "California King Bed": "https://saliao.github.io/p5.js-files/California_King_Bed.png",
    "Fun Fun Fun": "https://saliao.github.io/p5.js-files/Fun_Fun_Fun.png",
    "Nut King Call": "https://saliao.github.io/p5.js-files/Nut_King_Call.png",
    "Paisley Park": "https://saliao.github.io/p5.js-files/Paisley_Park.png",
    "Paper Moon King": "https://saliao.github.io/p5.js-files/Paper_Moon_King.png",
    "Soft & Wet": "https://saliao.github.io/p5.js-files/Soft_&_Wet.png",
    "Manic Depression": "https://saliao.github.io/p5.js-files/Manic_Depression.png",
    "Voodoo Child": "https://saliao.github.io/p5.js-files/Voodoo_Child.png",
    "All Along Watchtower": "https://saliao.github.io/p5.js-files/All_Along_Watchtower.png",
    "Dolly Dagger": "https://saliao.github.io/p5.js-files/Dolly_Dagger.png",
    "Nightbird Flying": "https://saliao.github.io/p5.js-files/Nightbird_Flying.png",
    "Purple Haze Distortion": "https://saliao.github.io/p5.js-files/Purple_Haze_Distortion.png",
    "Rainy Day Dream Away": "https://saliao.github.io/p5.js-files/Rainy_Day_Dream_Away.png",
    "Remote Romance": "https://saliao.github.io/p5.js-files/Remote_Romance.png",
    "House of Holy": "https://saliao.github.io/p5.js-files/House_of_Holy.png"
  

  
};
let backgrounds;
let bg;
let bg2;
let bg3;
let bg4;
let bg5;
let bg6;
let curbg;
function preload() {
    table = loadTable('https://saliao.github.io/p5.js-files/jojo-statsv2.csv', 'csv', 'header');
    // bg = loadImage('https://saliao.github.io/p5.js-files/jojosbackground.png')
    bg = 'https://saliao.github.io/p5.js-files/jojosbackground.png';
    bg2 = 'https://saliao.github.io/p5.js-files/jojosbackground2.png';
    bg3 = 'https://saliao.github.io/p5.js-files/jojosbackground3.png';
    bg4 = 'https://saliao.github.io/p5.js-files/jojosbackground4.png';
    bg5 = 'https://saliao.github.io/p5.js-files/jojosbackground5.png';
    bg6 = 'https://saliao.github.io/p5.js-files/jojosbackground6.png';
    backgrounds = [bg,bg2,bg3,bg4,bg5,bg6];
    
}

function setup() {
  //curbg = backgrounds[index];
  //background(bg);
    // stands = table.getColumn("Stand");
    // PWRStat = table.getColumn(clickedStat);
    createPlotlyVisualization();
   // Add event listener for key press
document.addEventListener('keydown', function(event) {
    // Check if the pressed key is the desired key (e.g., 'Enter' key)
    if (event.key === '1') {
        // Increment the index by 1 and ensure it doesn't exceed the array length
        index = (index + 1) % arrayofstats.length;
        
        // Update the clickedStat based on the new index
        clickedStat = arrayofstats[index];
        
        // Redraw the plotly visualization with the updated clickedStat
        createPlotlyVisualization();
    }
});
}

function createPlotlyVisualization() {
  let annotation = {
        x: 0.5,
        y: 1.06,  // Adjust y position as needed
        xref: 'paper',
        yref: 'paper',
        text: 'Press 1 for other stats',
        showarrow: false,
        font: {
            size: 24,
          family: 'SF Fedora',
            color: '#FFFFFF'
        }
    };
  stands = table.getColumn("Stand");
    PWRStat = table.getColumn(clickedStat);
      // Define descriptions and test case messages for each label
    let labelMeaning = {
        'A': {
            description: "Very Good",
            value:  5
        },
        'B': {
            description: "Good",
            value: 4
        },
        'C': {
            description: "Average",
            value: 3
        },
        'D': {
            description: "Poor",
            value: 2
        },
        'E': {
            description: "Very Poor",
            value: 1
        },
      'None': {
            description: "...",
            value: 0
        },
      'Infi': {
            description: "???",
            value: "∞"
        }
    };
    let hierarchy = {
        'PWR': [],
        'A': [],
        'B': [],
        'C': [],
        'D': [],
        'E': [],
        'None': [],
        'Infi': []
    };

    // Add stand images to the hierarchy object
    hierarchy['PWR'].forEach(parent => {
        standImages[parent] = ''; // Set the stand image URL for the middle parent
    });

    // Group stands by their parent categories
    for (let i = 0; i < stands.length; i++) {
        let power = PWRStat[i];
        let stand = stands[i];
        if (hierarchy.hasOwnProperty(power)) {
            hierarchy[power].push(stand);
        }
    }

    // Create the sunburst data
    let labels = [];
    let parents = [];
    let values = [];
    let hovertext = [];
    let totalStands = stands.length;
    // Add parent categories
    for (let category in hierarchy) {
        if (category !== clickedStat) {
            labels.push(category);
            parents.push(clickedStat); // Set the root as the parent for all top-level categories
            values.push(hierarchy[category].length);
          //hovertext.push(`Children: `); // Hover text for parent categories
          let categoryPercentage = ((hierarchy[category].length / totalStands) * 100).toFixed(2);
            
          if(labelMeaning.hasOwnProperty(category)){
             let labelDescription = labelMeaning[category].description; // Check if the key exists
        
        hovertext.push(`Children:  ${hierarchy[category].length}`+'<br> Percentage: '+`${categoryPercentage}%`+'<br>'+`${labelDescription}`); // Hover text for parent categories
               
             }
          else{
            hovertext.push(`Children:  ${hierarchy[category].length}`+'<br> Percentage: '+`${categoryPercentage}%`+'<br>'); // Hover text for parent categories
          }
            
        }
    }
      

    // Add children under each parent
    for (let category in hierarchy) {
        if (category !== clickedStat) {
            hierarchy[category].forEach(child => {
                labels.push(child);
                parents.push(category); // Set the parent as the current category
                values.push(156); // Each child contributes 1 to the total value of its parent      if(labelMeaning.hasOwnProperty(category)){
             let labelDescription = labelMeaning[category].value; // Check if the key exists
                hovertext.push('Parent:'+category+'<br>'+labelDescription); // No hover text for children
            });
        }
      
    }


    // Define the sunburst data
    let data = [{
        type: "sunburst",
        labels: labels, 
        parents: parents,
        values: values,
        outsidetextfont: { size: 20, color: "#377eb8" },
        leaf: { opacity: 0.6 },
        marker: { line: { width: 2 } },
        hoverinfo:  "label+text", // Show only label on hover
        hovertext: hovertext
    }];

    // Define the layout for the sunburst chart
    let layout = {
      
        width: 1000,
        height: 800,
      //plot_bgcolor:"black", // Set the background color to black
      paper_bgcolor: "rgba(255,0,0)", //background color of the chart container space
plot_bgcolor: "rgba(237,12,12,0)", //background color of plot area
      annotations: [annotation], // Add the annotation to the layout
        title: {
        text: arrayofdescriptions[index],
        font: {
            size: 24,
            color: 'rgb(255,255,255)', // Change text color to white
            family: 'SF Fedora', // Change font style
            // Add an outline to the font
            // Use the 'rgba()' function to specify the outline color with alpha transparency
            // The format is: 'rgba(red, green, blue, alpha)'
            // For example, 'rgba(0, 0, 0, 0.5)' would be a semi-transparent black outline
            outline: {
                color: 'rgb(0,0,0)', // Change outline color to black
                width: 2 // Specify the width of the outline
            },
            // Make the title font bold
            bold: true
        
        }
    },
      
      images: [
    {
      x: 0.5,
      y: 1.13,
      sizex: 1.5,
      sizey: 15,
      source: backgrounds[index],
      xanchor: "center",
      xref: "paper",
      yanchor: "center",
      yref: "paper",
      layer: "below",
      opacity: .9,
      
      
    },
  {
      x: 0.5,
      y: 1,
      sizex: 1,
      sizey: 1,
      source: "https://saliao.github.io/p5.js-files/White_Circle.png",
      xanchor: "center",
      xref: "paper",
      yanchor: "center",
      yref: "paper",
      layer: "below",
      opacity: 1
    },
      {
      x: 0.05,
      y: 0.24,
      sizex: 0.25,
      sizey: 0.25,
      source: "https://saliao.github.io/p5.js-files/Jojo's_Bizarre_Adventure.png",
      xanchor: "center",
      xref: "paper",
      yanchor: "center",
      yref: "paper",
      layer: "below",
      opacity: 1
    },

    
  ],
    };

    // Plot the sunburst chart
    Plotly.newPlot('plotlyDiv', data, layout);

    // Add event listener for hover
  // Add event listener for mouse leave on the sunburst chart container
document.getElementById('plotlyDiv').on('plotly_unhover', function() {
    // Mouse is not on the sunburst chart at all, set the image to default transparent
    document.getElementById('standImage').src = 'https://saliao.github.io/p5.js-files/Transparent.png';
});

// Add event listener for hover on the sunburst chart
document.getElementById('plotlyDiv').on('plotly_hover', function(data) {
    if (data.points.length > 0) {
        let standName = data.points[0].label; // Get the stand name

        // Check if standName exists in the standImages object
        if (standImages.hasOwnProperty(standName)) {
            let standImage = standImages[standName]; // Get the image URL for the stand

            // Display the image in a separate HTML element
            document.getElementById('standImage').src = standImage;
        } else {
        //     // If no image found for the stand, clear the image container
        //     document.getElementById('standImage').src = 'https://saliao.github.io/p5.js-files/Standstats.png';
        // }
      document.getElementById('standImage').src = 'https://saliao.github.io/p5.js-files/Transparent.png';
}
    }
});
 

}
