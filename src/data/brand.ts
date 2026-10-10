export type Palette = { name:string; primary:string; secondary:string; accent:string; background:string; text:string; industries:string[] };
export const palettes:Palette[] = [
 {name:"Field Notes",primary:"#355E3B",secondary:"#A3B18A",accent:"#DDA15E",background:"#F7F4EA",text:"#283128",industries:["Agriculture","Food","Beauty"]},
 {name:"Capital",primary:"#172A46",secondary:"#54708F",accent:"#C6A15B",background:"#F6F4EF",text:"#172A46",industries:["Finance","Legal","Real Estate"]},
 {name:"Digital Future",primary:"#5146E5",secondary:"#8E7DF2",accent:"#43D9C5",background:"#F7F7FC",text:"#20203A",industries:["Technology","Education"]},
 {name:"Sunday Market",primary:"#BB533F",secondary:"#E8A36B",accent:"#6F8F72",background:"#FFF8EF",text:"#452D28",industries:["Food","Photography"]},
 {name:"Soft Form",primary:"#AD6681",secondary:"#E5B6C1",accent:"#D4A754",background:"#FBF6F5",text:"#432E38",industries:["Fashion","Beauty","Health"]},
 {name:"After Hours",primary:"#242326",secondary:"#635E67",accent:"#C4A26C",background:"#F8F6F1",text:"#242326",industries:["Fashion","Finance","Photography"]},
 {name:"Clearwater",primary:"#126A70",secondary:"#61A6A0",accent:"#E9C46A",background:"#F1F8F7",text:"#183B3E",industries:["Health","Church / NGO","Education"]},
 {name:"Playground",primary:"#EF6D4E",secondary:"#F6C453",accent:"#5588C7",background:"#FFF9F1",text:"#392C2A",industries:["Food","Education","Photography"]},
 {name:"Blueprint",primary:"#244A73",secondary:"#6D98B4",accent:"#E08A59",background:"#F3F7FA",text:"#1F3447",industries:["Construction","Technology","Education"]},
 {name:"Wildflower",primary:"#556B4B",secondary:"#9BAE7F",accent:"#D18D7A",background:"#F7F6EC",text:"#30382C",industries:["Agriculture","Health","Beauty"]},
 {name:"Heritage",primary:"#692F39",secondary:"#A46050",accent:"#D2AE72",background:"#F8F3EA",text:"#3C2827",industries:["Church / NGO","Fashion","Food"]},
 {name:"Electric",primary:"#174D49",secondary:"#60A890",accent:"#D8EF75",background:"#F2F7F1",text:"#18332F",industries:["Technology","Construction","Finance"]}
];
export const industries=["Technology","Food","Fashion","Health","Education","Finance","Agriculture","Photography","Beauty","Construction","Church / NGO","Real Estate","Legal","Travel","Retail","Nonprofit","Other"];
export const fontOptions=["DM Sans","Playfair Display","Space Grotesk","Lora","Montserrat","Raleway","Oswald","Merriweather","Poppins","Nunito Sans","Roboto Mono","Cormorant Garamond","Abril Fatface","Dancing Script","Outfit"];
export const fontPairs=[
 {display:"Space Grotesk",tagline:"DM Sans",category:"geometric sans"},{display:"Playfair Display",tagline:"Montserrat",category:"editorial serif"},{display:"Oswald",tagline:"Roboto Mono",category:"condensed display"},{display:"Poppins",tagline:"Nunito Sans",category:"rounded sans"},{display:"Abril Fatface",tagline:"DM Sans",category:"display serif"},{display:"Cormorant Garamond",tagline:"Raleway",category:"elegant serif"},{display:"Merriweather",tagline:"Roboto Mono",category:"slab serif"},{display:"Dancing Script",tagline:"Montserrat",category:"script"},{display:"Roboto Mono",tagline:"DM Sans",category:"monospace"},{display:"Outfit",tagline:"Lora",category:"modern mix"},{display:"Lora",tagline:"Space Grotesk",category:"classic serif"},{display:"Raleway",tagline:"Merriweather",category:"light geometric"},{display:"Montserrat",tagline:"Cormorant Garamond",category:"fashion pairing"},{display:"Nunito Sans",tagline:"Oswald",category:"rounded pairing"},{display:"DM Sans",tagline:"Playfair Display",category:"quiet contrast"}];
export const industryIconMap:Record<string,string[]>={
 "Technology":["chip","circuit","code","cloud","shield","pixels","network","bolt","brackets","nodes"],
 "Food":["flame","leaf","wheat","chef-hat","apple","coffee","citrus","fork","bread","sprout"],
 "Fashion":["needle","diamond","thread","hanger","crown","sparkles","flower","ribbon"],
 "Health":["cross","heart","plus","pulse","shield","leaf","sun","care"],
 "Education":["book","cap","bulb","pencil","atom","globe","star","abc"],
 "Finance":["bar-chart","coins","vault","shield","growth","columns","arrow-up","balance"],
 "Agriculture":["leaf","wheat","sprout","sun","tractor","barn","seed","mountain"],
 "Photography":["camera","aperture","focus","shutter","frame","sun","lens","sparkles"],
 "Beauty":["flower","mirror","sparkles","drop","comb","crown","butterfly","petal"],
 "Construction":["building","crane","hammer","blueprint","brick","helmet","ruler","bridge"],
 "Church / NGO":["cross","hands","dove","heart","globe","sun","people","hope"],
 "Real Estate":["building","home","key","roof","door","city","pin","columns"],
 "Legal":["scales","gavel","shield","column","book","seal","justice","laurel"],
 "Travel":["globe","compass","plane","mountain","sun","pin","wave","suitcase"],
 "Retail":["bag","tag","star","box","shop","sparkles","basket","arrow"],
 "Nonprofit":["hands","heart","globe","people","dove","leaf","sun","ribbon"],
 "Other":["sparkles","circle","flower","mountain","sun","bolt","heart","globe"]
};
export const fontCss:Record<string,string>={"DM Sans":"var(--font-dm)","Playfair Display":"var(--font-playfair)","Space Grotesk":"var(--font-space)",Lora:"var(--font-lora)",Montserrat:"var(--font-mont)",Raleway:"var(--font-raleway)",Oswald:"var(--font-oswald)",Merriweather:"var(--font-merry)",Poppins:"var(--font-poppins)","Nunito Sans":"var(--font-nunito)","Roboto Mono":"var(--font-mono)","Cormorant Garamond":"var(--font-cormorant)","Abril Fatface":"var(--font-abril)","Dancing Script":"var(--font-dancing)",Outfit:"var(--font-outfit)"};
