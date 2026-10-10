import type {Brand} from "@/data/types";
export const glyphs:Record<string,(color:string,size:number)=>React.ReactNode>={
 sparkles:(c,s)=><svg width={s} height={s} viewBox="0 0 48 48" fill="none"><path d="M24 3l4.5 15.5L44 24l-15.5 4.5L24 44l-4.5-15.5L4 24l15.5-5.5L24 3z" fill={c}/><path d="M39 2l1.8 5.2L46 9l-5.2 1.8L39 16l-1.8-5.2L32 9l5.2-1.8L39 2z" fill={c}/></svg>,
 leaf:(c,s)=><svg width={s} height={s} viewBox="0 0 48 48" fill="none"><path d="M42 6C22 5 8 10 7 25c-.7 9 7 14 15 11C37 31 40 18 42 6Z" fill={c}/><path d="M8 42c7-12 14-18 25-26" stroke="white" strokeWidth="2.5" strokeLinecap="round"/></svg>,
 sun:(c,s)=><svg width={s} height={s} viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="9" fill={c}/><path d="M24 3v7m0 28v7M3 24h7m28 0h7M9.2 9.2l5 5m19.6 19.6 5 5m0-29.6-5 5m-19.6 19.6-5 5" stroke={c} strokeWidth="3" strokeLinecap="round"/></svg>,
 mountain:(c,s)=><svg width={s} height={s} viewBox="0 0 48 48" fill="none"><path d="M3 40 18 13l8 14 6-9 13 22H3Z" fill={c}/><path d="m18 13 5 9 3-2-8-7Z" fill="white" opacity=".8"/></svg>,
 heart:(c,s)=><svg width={s} height={s} viewBox="0 0 48 48"><path d="M24 42S5 30 5 17C5 6 19 4 24 14 29 4 43 6 43 17c0 13-19 25-19 25Z" fill={c}/></svg>,
 circle:(c,s)=><svg width={s} height={s} viewBox="0 0 48 48"><circle cx="24" cy="24" r="18" fill="none" stroke={c} strokeWidth="7"/><circle cx="24" cy="24" r="5" fill={c}/></svg>,
 camera:(c,s)=><svg width={s} height={s} viewBox="0 0 48 48" fill="none"><path d="M7 14h8l3-5h12l3 5h8a3 3 0 0 1 3 3v21H4V17a3 3 0 0 1 3-3Z" fill={c}/><circle cx="24" cy="26" r="8" stroke="white" strokeWidth="3"/></svg>,
 cross:(c,s)=><svg width={s} height={s} viewBox="0 0 48 48"><path d="M19 4h10v15h15v10H29v15H19V29H4V19h15V4Z" fill={c}/></svg>,
 flame:(c,s)=><svg width={s} height={s} viewBox="0 0 48 48"><path d="M25 3c3 12-7 13-3 21 1-5 6-7 9-13 10 12 13 20 6 30-7 10-27 6-29-7-2-12 7-20 17-31Z" fill={c}/></svg>,
 building:(c,s)=><svg width={s} height={s} viewBox="0 0 48 48"><path d="M7 42V14h22v28H7Zm22-18h12v18H29V24ZM12 19h5v5h-5zm10 0h4v5h-4zm-10 10h5v5h-5zm10 0h4v5h-4zm13 0h3v5h-3zm-1-22 5 5H30l4-5Z" fill={c}/></svg>,
 globe:(c,s)=><svg width={s} height={s} viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="19" stroke={c} strokeWidth="4"/><path d="M5 24h38M24 5c7 7 9 31 0 38M24 5c-7 7-9 31 0 38" stroke={c} strokeWidth="2"/></svg>,
 bolt:(c,s)=><svg width={s} height={s} viewBox="0 0 48 48"><path d="M27 2 8 27h13l-2 19 21-27H26l1-17Z" fill={c}/></svg>,
 flower:(c,s)=><svg width={s} height={s} viewBox="0 0 48 48"><path d="M24 6c6-8 14 1 8 8 10-3 14 7 4 10 9 6 1 15-7 9 2 10-8 13-11 3-6 9-15 2-8-6-10 0-11-11 0-13-3-10 7-15 14-7Z" fill={c}/><circle cx="24" cy="24" r="5" fill="white"/></svg>,
};
export const iconNames=Object.keys(glyphs);
export function Icon({name,color,size=42}:{name:string;color:string;size?:number}){return <>{glyphs[name]?.(color,size)??glyphs.sparkles(color,size)}</>}
function escapeXml(v:string){return v.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"}[c]!))}
function displayName(b:Brand){return b.textCase==="upper"?b.name.toLocaleUpperCase():b.textCase==="lower"?b.name.toLocaleLowerCase():b.name}
function fittedText(value:string,center:number,y:number,maxWidth:number,size:number,b:Brand,fill:string,weight=b.weight){
 const family=fontFamily(b.font),letterSpacing=Math.max(-.5,b.letterSpacing),estimated=Math.max(1,[...value].length*(size*.58+letterSpacing));
 const fontSize=Math.max(15,Math.min(size,size*maxWidth/estimated));
 return `<text x="${center}" y="${y}" text-anchor="middle" fill="${fill}" font-family="${family}, sans-serif" font-size="${fontSize}" font-weight="${weight}" letter-spacing="${letterSpacing}">${escapeXml(value)}</text>`;
}
function mark(b:Brand,color:string,x:number,y:number,size:number){
 const scale=size/48;
 return `<g transform="translate(${x} ${y}) rotate(${b.rotation}) scale(${scale*b.iconSize})"><g transform="translate(-24 -24)">${symbol(b.icon,color)}</g></g>`;
}
export function logoSvg(b:Brand,w=800,h=400,variant:"color"|"black"|"white"="color"){
 const primary=variant==="black"?"#111111":variant==="white"?"#ffffff":b.colors.primary;
 const ink=variant==="black"?"#111111":variant==="white"?"#ffffff":b.colors.text;
 const bg=b.bgMode==="solid"?b.bgColor:b.bgMode==="gradient"?"url(#bg)":"none";
 const title=displayName(b),tag=b.tagline.trim();let content="";
 const layout=b.layout;
 if(layout==="horizontal"){
  const position=b.iconPosition;
  if(position==="left"){
   content=`${mark(b,primary,118,200,66)}${fittedText(title,480,190,545,b.fontSize,b,ink)}${tag?fittedText(tag,480,225,520,18,b,ink,400):""}`;
  }else if(position==="right"){
   content=`${fittedText(title,320,190,545,b.fontSize,b,ink)}${tag?fittedText(tag,320,225,520,18,b,ink,400):""}${mark(b,primary,682,200,66)}`;
  }else if(position==="top"){
   content=`${mark(b,primary,400,112,58)}${fittedText(title,400,215,680,b.fontSize,b,ink)}${tag?fittedText(tag,400,250,650,18,b,ink,400):""}`;
  }else{
   content=`${fittedText(title,400,190,690,b.fontSize,b,ink)}${tag?fittedText(tag,400,225,650,18,b,ink,400):""}`;
  }
 }else if(layout==="stacked"){
  content=`${mark(b,primary,400,112,68)}${fittedText(title,400,218,660,b.fontSize,b,ink)}${tag?fittedText(tag,400,251,620,18,b,ink,400):""}`;
 }else if(layout==="monogram"){
  const letters=b.name.trim().split(/\s+/).filter(Boolean).map(x=>x[0]).join("").slice(0,2).toLocaleUpperCase()||"B";
  const shape=b.shape==="circle"?`<circle cx="400" cy="168" r="91" fill="${primary}"/>`:b.shape==="shield"?`<path d="M309 78h182v112q0 77-91 112-91-35-91-112Z" fill="${primary}"/>`:`<rect x="309" y="77" width="182" height="182" rx="${b.shape==="rounded"?35:0}" fill="${primary}"/>`;
  content=`${shape}<text x="400" y="198" text-anchor="middle" dominant-baseline="middle" fill="#fff" font-family="${fontFamily(b.font)},sans-serif" font-size="82" font-weight="700">${escapeXml(letters)}</text>${fittedText(title,400,323,660,26,b,ink)}`;
 }else{
  const shield=b.shape==="shield"||layout==="badge";
  const frame=b.shape==="none"?"":shield?`<path d="M400 32 584 111v111q0 109-184 154Q216 331 216 222V111Z" fill="none" stroke="${primary}" stroke-width="5"/>`:`<rect x="220" y="25" width="360" height="350" rx="${b.shape==="circle"?175:b.shape==="rounded"?36:0}" fill="none" stroke="${primary}" stroke-width="5"/>`;
  content=`${frame}${mark(b,primary,400,131,58)}${fittedText(title,400,231,490,b.fontSize,b,ink)}${tag?fittedText(tag,400,262,455,16,b,ink,400):""}`;
 }
 const background=bg==="none"?"":`<rect width="800" height="400" fill="${bg}"/>`;
 return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 800 400" role="img" aria-label="${escapeXml(b.name)} logo"><defs><linearGradient id="bg" x2="1" y2="1"><stop stop-color="${b.colors.background}"/><stop offset="1" stop-color="${b.colors.secondary}"/></linearGradient></defs>${background}${content}</svg>`;
}
function fontFamily(name:string){const map:Record<string,string>={"DM Sans":"Arial","Space Grotesk":"Arial","Playfair Display":"Georgia",Lora:"Georgia",Montserrat:"Arial",Raleway:"Arial",Oswald:"Impact",Merriweather:"Georgia",Poppins:"Arial","Nunito Sans":"Arial","Roboto Mono":"monospace","Cormorant Garamond":"Georgia","Abril Fatface":"Georgia","Dancing Script":"cursive",Outfit:"Arial"};return map[name]??"Arial"}
function symbol(name:string,c:string){const paths:Record<string,string>={sparkles:`<path d="M24 3l5 15 16 6-16 5-5 16-5-16-16-5 16-6 5-15z" fill="${c}"/>`,leaf:`<path d="M45 3C25 3 7 9 7 27c0 12 10 19 20 12C40 29 43 15 45 3Z" fill="${c}"/><path d="M8 45C18 30 27 22 39 12" stroke="#fff" stroke-width="2"/>`,sun:`<circle cx="24" cy="24" r="10" fill="${c}"/><path d="M24 2v7m0 30v7M2 24h7m30 0h7m-37-16 5 5m20 20 5 5m0-30-5 5M12 33l-5 5" stroke="${c}" stroke-width="4"/>`,mountain:`<path d="m2 43 16-30 8 15 6-10 14 25H2z" fill="${c}"/>`,heart:`<path d="M24 44S3 31 3 17C3 5 18 3 24 15 30 3 45 5 45 17c0 14-21 27-21 27Z" fill="${c}"/>`,circle:`<circle cx="24" cy="24" r="17" fill="none" stroke="${c}" stroke-width="7"/><circle cx="24" cy="24" r="4" fill="${c}"/>`,camera:`<path d="M4 14h9l4-6h14l4 6h9v28H4z" fill="${c}"/><circle cx="24" cy="28" r="8" fill="none" stroke="#fff" stroke-width="3"/>`,cross:`<path d="M18 3h12v15h15v12H30v15H18V30H3V18h15z" fill="${c}"/>`,flame:`<path d="M26 2c4 12-7 14-2 22 2-5 7-7 9-13 11 14 13 23 6 32-8 10-29 5-31-8C6 22 16 12 26 2Z" fill="${c}"/>`,building:`<path d="M6 44V13h25v31H6zm25-19h12v19H31zM11 18h6v6h-6zm10 0h6v6h-6zm-10 11h6v6h-6zm10 0h6v6h-6z" fill="${c}"/>`,globe:`<circle cx="24" cy="24" r="20" fill="none" stroke="${c}" stroke-width="4"/><path d="M4 24h40M24 4c8 9 8 31 0 40M24 4c-8 9-8 31 0 40" stroke="${c}" stroke-width="2"/>`,bolt:`<path d="M28 2 7 28h14l-2 18L42 19H27z" fill="${c}"/>`,flower:`<path d="M24 4c7-9 16 1 9 9 12-4 17 8 5 11 10 7 2 17-8 9 2 12-9 15-12 4-7 10-17 2-9-7-11 0-12-12 0-14C5 5 17 0 24 4Z" fill="${c}"/><circle cx="24" cy="24" r="5" fill="#fff"/>`};return paths[name]??paths.sparkles}
