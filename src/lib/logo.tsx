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
export const iconNames=[...Object.keys(glyphs),"chip","circuit","code","cloud","shield","pixels","network","nodes","brackets","wheat","chef-hat","apple","coffee","citrus","fork","bread","sprout","needle","diamond","thread","hanger","crown","plus","pulse","book","cap","bulb","pencil","atom","bar-chart","coins","vault","growth","tractor","seed","aperture","focus","shutter","frame","mirror","drop","comb","crane","hammer","blueprint","brick","helmet","bridge","hands","dove","people","home","key","roof","door","city","pin","scales","gavel","column","seal","laurel","compass","plane","wave","suitcase","bag","tag","box","shop","basket","ribbon","star","lock","triangle","bars"];
export function Icon({name,color,size=42}:{name:string;color:string;size?:number}){return glyphs[name]?.(color,size)??<svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" dangerouslySetInnerHTML={{__html:symbol(name,color)}}/>}
function escapeXml(v:string){return v.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"}[c]!))}
function displayName(b:Brand){return b.textCase==="upper"?b.name.toLocaleUpperCase():b.textCase==="lower"?b.name.toLocaleLowerCase():b.name}
function initials(value:string){const first=value.trim().split(/\s+/)[0]??"";if(/^[A-Z0-9]{2,4}$/.test(first))return first.slice(0,2);return value.trim().split(/\s+/).filter(Boolean).map(word=>word[0]).join("").slice(0,2).toUpperCase()||"B"}
function measuredWidth(value:string,size:number,b:Brand,weight=b.weight){let width=[...value].length*size*.58;if(typeof document!=="undefined"){const canvas=document.createElement("canvas"),ctx=canvas.getContext("2d");if(ctx){const probe=document.createElement("span");probe.style.fontFamily=fontFamily(b.font);document.body.appendChild(probe);const resolved=getComputedStyle(probe).fontFamily;probe.remove();ctx.font=`${weight} ${size}px ${resolved}`;width=ctx.measureText(value).width;}}return width+Math.max(0,value.length-1)*Math.max(0,b.letterSpacing)}
function horizontalLockup(b:Brand,title:string,tag:string,primary:string,ink:string,reverse=false){const iconWidth=68,textSize=b.fontSize,tagSize=Math.max(15,b.fontSize*.34),tagBrand={...b,font:b.taglineFont??"DM Sans",letterSpacing:Math.max(1.3,b.letterSpacing)},titleWidth=measuredWidth(title,textSize,b),tagWidth=tag?measuredWidth(tag,tagSize,tagBrand,400):0;let textWidth=Math.max(titleWidth,tagWidth),scale=Math.min(1,690/(textWidth+iconWidth+iconWidth*.4));textWidth*=scale;const icon=iconWidth*scale,gap=iconWidth*.4*scale,left=(800-(icon+gap+textWidth))/2,iconCenter=left+icon/2,textCenter=left+icon+gap+textWidth/2;const markXml=mark(b,primary,reverse?800-iconCenter:iconCenter,200,icon);const nameXml=fittedText(title,reverse?800-textCenter:textCenter,191,textWidth,textSize*scale,b,ink);const taglineXml=tag?fittedText(tag,reverse?800-textCenter:textCenter,225,textWidth,tagSize*scale,tagBrand,ink,400):"";return reverse?`${nameXml}${taglineXml}${markXml}`:`${markXml}${nameXml}${taglineXml}`}
function fittedText(value:string,center:number,y:number,maxWidth:number,size:number,b:Brand,fill:string,weight=b.weight){
 const family=fontFamily(b.font),letterSpacing=Math.max(-.5,b.letterSpacing);let measured=Math.max(1,[...value].length*(size*.58+letterSpacing));
 if(typeof document!=="undefined"){const canvas=document.createElement("canvas"),ctx=canvas.getContext("2d");if(ctx){const probe=document.createElement("span");probe.style.fontFamily=family;document.body.appendChild(probe);const resolved=getComputedStyle(probe).fontFamily;probe.remove();ctx.font=`${weight} ${size}px ${resolved}`;measured=ctx.measureText(value).width+Math.max(0,value.length-1)*letterSpacing;}}
 const fontSize=Math.max(15,Math.min(size,size*maxWidth/measured));
 return `<text x="${center}" y="${y}" text-anchor="middle" fill="${fill}" stroke="none" paint-order="normal" font-family="${family}" font-size="${fontSize}" font-weight="${weight}" letter-spacing="${letterSpacing}" style="stroke:none;text-shadow:none">${escapeXml(value)}</text>`;
}
function mark(b:Brand,color:string,x:number,y:number,size:number){
 const scale=size/48;
 if(b.markType==="monogram")return `<g transform="translate(${x-size/2} ${y-size/2})"><text x="${size/2}" y="${size*.69}" text-anchor="middle" fill="${color}" stroke="none" font-family="${fontFamily(b.font)}" font-size="${size*.72}" font-weight="700" letter-spacing="-${size*.08}" style="stroke:none;text-shadow:none">${escapeXml(initials(b.name))}</text></g>`;
 if(b.markType==="abstract"){
  const letters=initials(b.name),seed=[...letters].reduce((sum,ch)=>sum+ch.charCodeAt(0),0),shape=seed%3;
  const first=b.colors.primary,second=b.colors.accent;
  const drawing=shape===0?`<circle cx="18" cy="24" r="17" fill="${first}"/><circle cx="30" cy="24" r="17" fill="${second}" opacity=".86"/><text x="24" y="31" text-anchor="middle" fill="#fff" font-family="${fontFamily(b.font)}" font-size="17" font-weight="700">${escapeXml(letters[0])}</text>`:shape===1?`<path d="M24 3 44 14v20L24 45 4 34V14Z" fill="${first}"/><path d="M24 11 37 18v13L24 38 11 31V18Z" fill="${second}"/><text x="24" y="30" text-anchor="middle" fill="#fff" font-family="${fontFamily(b.font)}" font-size="16" font-weight="700">${escapeXml(letters[0])}</text>`:`<rect x="4" y="8" width="12" height="32" rx="6" fill="${first}"/><rect x="18" y="4" width="12" height="40" rx="6" fill="${second}"/><rect x="32" y="12" width="12" height="28" rx="6" fill="${first}"/><text x="24" y="31" text-anchor="middle" fill="#fff" font-family="${fontFamily(b.font)}" font-size="16" font-weight="700">${escapeXml(letters[0])}</text>`;
  return `<g transform="translate(${x-size/2} ${y-size/2}) scale(${size/48})">${drawing}</g>`;
 }
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
   content=horizontalLockup(b,title,tag,primary,ink);
  }else if(position==="right"){
   content=horizontalLockup(b,title,tag,primary,ink,true);
  }else if(position==="top"){
   content=`${mark(b,primary,400,112,58)}${fittedText(title,400,205,680,b.fontSize,b,ink)}${tag?fittedText(tag,400,240,650,Math.max(15,b.fontSize*.34),{...b,font:b.taglineFont??"DM Sans",letterSpacing:Math.max(1.3,b.letterSpacing)},ink,400):""}`;
  }else{
   content=`${fittedText(title,400,190,690,b.fontSize,b,ink)}${tag?fittedText(tag,400,225,650,Math.max(15,b.fontSize*.34),{...b,font:b.taglineFont??"DM Sans",letterSpacing:Math.max(1.3,b.letterSpacing)},ink,400):""}`;
  }
 }else if(layout==="stacked"){
  content=`${mark(b,primary,400,112,68)}${fittedText(title,400,206,660,b.fontSize,b,ink)}${tag?fittedText(tag,400,239,620,Math.max(15,b.fontSize*.34),{...b,font:b.taglineFont??"DM Sans",letterSpacing:Math.max(1.3,b.letterSpacing)},ink,400):""}`;
 }else if(layout==="monogram"){
  const letters=initials(b.name);
  const shape=b.shape==="circle"?`<circle cx="400" cy="168" r="91" fill="${primary}"/>`:b.shape==="shield"?`<path d="M309 78h182v112q0 77-91 112-91-35-91-112Z" fill="${primary}"/>`:`<rect x="309" y="77" width="182" height="182" rx="${b.shape==="rounded"?35:0}" fill="${primary}"/>`;
  content=`${shape}<text x="400" y="198" text-anchor="middle" dominant-baseline="middle" fill="#fff" font-family="${fontFamily(b.font)},sans-serif" font-size="82" font-weight="700">${escapeXml(letters)}</text>${fittedText(title,400,323,660,26,b,ink)}`;
 }else if(layout==="rounded-icon"){
  content=`<rect x="100" y="145" width="108" height="108" rx="28" fill="${primary}"/>${mark({...b,markType:b.markType==="icon"?"icon":b.markType},"#ffffff",154,199,54)}${fittedText(title,500,191,520,b.fontSize,b,ink)}${tag?fittedText(tag,500,225,500,Math.max(15,b.fontSize*.34),{...b,font:b.taglineFont??"DM Sans",letterSpacing:Math.max(1.3,b.letterSpacing)},ink,400):""}`;
 }else if(layout==="underline"){
  content=`${mark(b,primary,142,194,56)}${fittedText(title,490,190,520,b.fontSize,b,ink)}<path d="M310 211H668" stroke="${b.colors.accent}" stroke-width="4" stroke-linecap="round"/>${tag?fittedText(tag,490,244,500,Math.max(15,b.fontSize*.34),{...b,font:b.taglineFont??"DM Sans",letterSpacing:Math.max(1.3,b.letterSpacing)},ink,400):""}`;
 }else if(layout==="split-wordmark"){
  const words=title.trim().split(/\s+/),first=words.shift()??title,rest=words.join(" ")||first;
  const splitSize=Math.min(b.fontSize,b.fontSize*480/measuredWidth(title,b.fontSize,b));content=`${mark({...b,markType:"monogram"},b.colors.accent,114,200,52)}<text x="480" y="197" text-anchor="middle" fill="${ink}" stroke="none" font-family="${fontFamily(b.font)}" font-size="${splitSize}" font-weight="${b.weight}" letter-spacing="${b.letterSpacing}" style="stroke:none;text-shadow:none"><tspan fill="${b.colors.accent}">${escapeXml(first)}</tspan><tspan fill="${primary}">${escapeXml(words.length?` ${rest}`:"")}</tspan></text>${tag?fittedText(tag,480,232,520,Math.max(15,b.fontSize*.34),{...b,font:b.taglineFont??"DM Sans",letterSpacing:Math.max(1.3,b.letterSpacing)},ink,400):""}`;
 }else if(layout==="circle-seal"){
  const sealFont=Math.min(24,390/Math.max(1,title.length*.65+3));content=`<circle cx="400" cy="200" r="157" fill="none" stroke="${primary}" stroke-width="4"/><circle cx="400" cy="200" r="137" fill="none" stroke="${b.colors.accent}" stroke-width="1.5"/><defs><path id="brand-seal-path" d="M 265 200 A 135 135 0 0 1 535 200"/></defs><text fill="${primary}" font-family="${fontFamily(b.font)}" font-size="${sealFont}" font-weight="${b.weight}" letter-spacing="2"><textPath href="#brand-seal-path" startOffset="50%" text-anchor="middle">${escapeXml(title.toLocaleUpperCase())}</textPath></text>${mark(b,primary,400,208,70)}<path d="M350 300H450" stroke="${b.colors.accent}" stroke-width="3"/>${tag?fittedText(tag,400,332,260,16,{...b,font:b.taglineFont??"DM Sans",letterSpacing:Math.max(1.3,b.letterSpacing)},ink,400):""}`;
 }else if(layout==="lettermark"){
  const letters=initials(title);content=`<text x="400" y="220" text-anchor="middle" dominant-baseline="middle" fill="${primary}" font-family="${fontFamily(b.font)}" font-size="108" font-weight="${b.weight}" letter-spacing="-8">${escapeXml(letters)}</text><circle cx="${letters.length===1?465:500}" cy="156" r="9" fill="${b.colors.accent}"/>${fittedText(title,400,329,620,22,b,ink,500)}`;
 }else if(layout==="bar-mark"){
  content=`${mark(b,primary,142,199,60)}<rect x="210" y="151" width="5" height="99" rx="2.5" fill="${b.colors.accent}"/>${fittedText(title,480,192,510,b.fontSize,b,ink)}${tag?fittedText(tag,480,226,490,Math.max(15,b.fontSize*.34),{...b,font:b.taglineFont??"DM Sans",letterSpacing:Math.max(1.3,b.letterSpacing)},ink,400):""}`;
 }else if(layout==="compact"){
  content=`${mark(b,primary,217,200,48)}${fittedText(title,485,193,485,Math.min(b.fontSize,36),b,ink)}${tag?fittedText(tag,485,221,470,Math.max(14,b.fontSize*.3),{...b,font:b.taglineFont??"DM Sans",letterSpacing:Math.max(1.3,b.letterSpacing)},ink,400):""}`;
 }else if(layout==="abstract"){
  content=`${mark({...b,markType:"abstract"},primary,145,200,82)}${fittedText(title,493,191,510,b.fontSize,b,ink)}<path d="M330 235h326" stroke="${b.colors.secondary}" stroke-width="2"/>${tag?fittedText(tag,493,261,490,Math.max(15,b.fontSize*.34),{...b,font:b.taglineFont??"DM Sans",letterSpacing:Math.max(1.3,b.letterSpacing)},ink,400):""}`;
 }else if(layout==="bar-mark"){
  content=`${mark(b,primary,142,199,60)}${fittedText(title,480,192,510,b.fontSize,b,ink)}`;
 }else{
  const shield=b.shape==="shield"||layout==="badge";
  const frame=b.shape==="none"?"":shield?`<path d="M400 32 584 111v111q0 109-184 154Q216 331 216 222V111Z" fill="none" stroke="${primary}" stroke-width="5"/>`:`<rect x="220" y="25" width="360" height="350" rx="${b.shape==="circle"?175:b.shape==="rounded"?36:0}" fill="none" stroke="${primary}" stroke-width="5"/>`;
  content=`${frame}${mark(b,primary,400,131,58)}${fittedText(title,400,231,252,b.fontSize,b,ink)}${tag?fittedText(tag,400,262,225,Math.max(15,b.fontSize*.34),{...b,font:b.taglineFont??"DM Sans",letterSpacing:Math.max(1.3,b.letterSpacing)},ink,400):""}`;
 }
 const background=bg==="none"?"":`<rect width="800" height="400" fill="${bg}"/>`;
 return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 800 400" role="img" aria-label="${escapeXml(b.name)} logo"><defs><linearGradient id="bg" x2="1" y2="1"><stop stop-color="${b.colors.background}"/><stop offset="1" stop-color="${b.colors.secondary}"/></linearGradient></defs>${background}<g id="brand-lockup">${content}</g></svg>`;
}
function fontFamily(name:string){const map:Record<string,string>={"DM Sans":"var(--font-dm), 'DM Sans', Arial","Space Grotesk":"var(--font-space), 'Space Grotesk', Arial","Playfair Display":"var(--font-playfair), 'Playfair Display', Georgia",Lora:"var(--font-lora), Lora, Georgia",Montserrat:"var(--font-mont), Montserrat, Arial",Raleway:"var(--font-raleway), Raleway, Arial",Oswald:"var(--font-oswald), Oswald, Impact",Merriweather:"var(--font-merry), Merriweather, Georgia",Poppins:"var(--font-poppins), Poppins, Arial","Nunito Sans":"var(--font-nunito), 'Nunito Sans', Arial","Roboto Mono":"var(--font-mono), 'Roboto Mono', monospace","Cormorant Garamond":"var(--font-cormorant), 'Cormorant Garamond', Georgia","Abril Fatface":"var(--font-abril), 'Abril Fatface', Georgia","Dancing Script":"var(--font-dancing), 'Dancing Script', cursive",Outfit:"var(--font-outfit), Outfit, Arial"};return map[name]??"Arial, sans-serif"}
function symbol(name:string,c:string){
 const paths:Record<string,string>={
 sparkles:`<path d="M24 3l5 15 16 6-16 5-5 16-5-16-16-5 16-6 5-15z" fill="${c}"/>`,
 leaf:`<path d="M45 3C25 3 7 9 7 27c0 12 10 19 20 12C40 29 43 15 45 3Z" fill="${c}"/><path d="M8 45C18 30 27 22 39 12" stroke="#fff" stroke-width="2"/>`,
 sun:`<circle cx="24" cy="24" r="10" fill="${c}"/><path d="M24 2v7m0 30v7M2 24h7m30 0h7m-37-16 5 5m20 20 5 5m0-30-5 5M12 33l-5 5" stroke="${c}" stroke-width="4"/>`,
 mountain:`<path d="m2 43 16-30 8 15 6-10 14 25H2z" fill="${c}"/>`,heart:`<path d="M24 44S3 31 3 17C3 5 18 3 24 15 30 3 45 5 45 17c0 14-21 27-21 27Z" fill="${c}"/>`,
 circle:`<circle cx="24" cy="24" r="17" fill="none" stroke="${c}" stroke-width="7"/><circle cx="24" cy="24" r="4" fill="${c}"/>`,
 camera:`<path d="M4 14h9l4-6h14l4 6h9v28H4z" fill="${c}"/><circle cx="24" cy="28" r="8" fill="none" stroke="#fff" stroke-width="3"/>`,
 cross:`<path d="M18 3h12v15h15v12H30v15H18V30H3V18h15z" fill="${c}"/>`,flame:`<path d="M26 2c4 12-7 14-2 22 2-5 7-7 9-13 11 14 13 23 6 32-8 10-29 5-31-8C6 22 16 12 26 2Z" fill="${c}"/>`,
 building:`<path d="M6 44V13h25v31H6zm25-19h12v19H31zM11 18h6v6h-6zm10 0h6v6h-6zm-10 11h6v6h-6zm10 0h6v6h-6z" fill="${c}"/>`,globe:`<circle cx="24" cy="24" r="20" fill="none" stroke="${c}" stroke-width="4"/><path d="M4 24h40M24 4c8 9 8 31 0 40M24 4c-8 9-8 31 0 40" stroke="${c}" stroke-width="2"/>`,
 bolt:`<path d="M28 2 7 28h14l-2 18L42 19H27z" fill="${c}"/>`,flower:`<path d="M24 4c7-9 16 1 9 9 12-4 17 8 5 11 10 7 2 17-8 9 2 12-9 15-12 4-7 10-17 2-9-7-11 0-12-12 0-14C5 5 17 0 24 4Z" fill="${c}"/><circle cx="24" cy="24" r="5" fill="#fff"/>`,
 chip:`<rect x="11" y="11" width="26" height="26" rx="4" fill="none" stroke="${c}" stroke-width="4"/><rect x="18" y="18" width="12" height="12" rx="2" fill="${c}"/><path d="M17 3v8m7-8v8m7-8v8M17 37v8m7-8v8m7-8v8M3 17h8m-8 7h8m-8 7h8m26-14h8m-8 7h8m-8 7h8" stroke="${c}" stroke-width="3"/>`,
 circuit:`<path d="M8 10h13v10h9v-8h10M8 38h10V28h12v10h10" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="8" cy="10" r="4" fill="${c}"/><circle cx="40" cy="12" r="4" fill="${c}"/><circle cx="8" cy="38" r="4" fill="${c}"/><circle cx="40" cy="38" r="4" fill="${c}"/>`,
 code:`<path d="m17 13-11 11 11 11M31 13l11 11-11 11M28 8l-8 32" fill="none" stroke="${c}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`,
 brackets:`<path d="M17 8H9v32h8M31 8h8v32h-8M28 13l-8 22" fill="none" stroke="${c}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`,
 cloud:`<path d="M13 36h23a9 9 0 0 0 1-18 14 14 0 0 0-27-2 10 10 0 0 0 3 20Z" fill="none" stroke="${c}" stroke-width="4" stroke-linejoin="round"/>`,
 shield:`<path d="M24 4 41 11v12q0 14-17 21Q7 37 7 23V11Z" fill="none" stroke="${c}" stroke-width="4"/><path d="m16 24 5 5 11-12" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round"/>`,
 pixels:`<path d="M5 5h11v11H5zm14 0h10v10H19zm13 0h11v11H32zM5 19h10v10H5zm14 0h11v11H19zm13 0h11v10H32zM5 32h11v11H5zm14 0h10v11H19zm13-1h11v12H32z" fill="${c}"/>`,
 network:`<path d="m12 13 12 11 13-13M12 13 8 36l16-12 13 13" fill="none" stroke="${c}" stroke-width="2.5"/><circle cx="12" cy="13" r="5" fill="${c}"/><circle cx="37" cy="11" r="5" fill="${c}"/><circle cx="24" cy="24" r="5" fill="${c}"/><circle cx="8" cy="36" r="5" fill="${c}"/><circle cx="37" cy="37" r="5" fill="${c}"/>`,
 nodes:`<circle cx="24" cy="24" r="5" fill="${c}"/><circle cx="9" cy="10" r="4" fill="${c}"/><circle cx="39" cy="10" r="4" fill="${c}"/><circle cx="9" cy="38" r="4" fill="${c}"/><circle cx="39" cy="38" r="4" fill="${c}"/><path d="m12 13 9 9m15-9-9 9m-15 13 9-9m15 9-9-9" stroke="${c}" stroke-width="3"/>`,
 wheat:`<path d="M24 44V8m0 14C12 22 9 15 9 10c9 0 15 4 15 12Zm0 8C36 30 39 23 39 18c-9 0-15 4-15 12Zm0-14C14 16 13 9 14 5c7 1 11 4 10 13Zm0 23c-8 0-11-4-11-9 7 0 11 3 11 9Z" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round"/>`,
 "bar-chart":`<path d="M7 40V25h8v15zm13 0V15h8v25zm13 0V7h8v33z" fill="${c}"/>`,coins:`<circle cx="18" cy="18" r="10" fill="none" stroke="${c}" stroke-width="3"/><circle cx="30" cy="30" r="10" fill="none" stroke="${c}" stroke-width="3"/><path d="M18 12v12m-4-8h7m-7 4h8M30 24v12m-4-8h7m-7 4h8" stroke="${c}" stroke-width="2"/>`,
 "chef-hat":`<path d="M10 24a9 9 0 1 1 7-15 9 9 0 1 1 14 0 9 9 0 1 1 7 15v17H10Z" fill="none" stroke="${c}" stroke-width="3"/><path d="M10 31h28" stroke="${c}" stroke-width="3"/>`,
 book:`<path d="M6 9q10-3 18 3 8-6 18-3v29q-10-3-18 3-8-6-18-3Zm18 3v29" fill="none" stroke="${c}" stroke-width="3" stroke-linejoin="round"/>`,
 "plus":`<path d="M20 5h8v15h15v8H28v15h-8V28H5v-8h15z" fill="${c}"/>`,pulse:`<path d="M4 25h9l5-13 9 25 6-14h11" fill="none" stroke="${c}" stroke-width="3" stroke-linejoin="round"/>`,
 "home":`<path d="m4 23 20-17 20 17v20H8V23m11 20V29h10v14" fill="none" stroke="${c}" stroke-width="3" stroke-linejoin="round"/>`,compass:`<circle cx="24" cy="24" r="19" fill="none" stroke="${c}" stroke-width="3"/><path d="m31 15-5 12-10 6 5-12z" fill="${c}"/>`,
 "scales":`<path d="M24 7v33M12 14h24M8 42h32M12 14 5 29h14zm24 0-7 15h14z" fill="none" stroke="${c}" stroke-width="3" stroke-linejoin="round"/>`,hands:`<path d="M24 41 8 26a8 8 0 0 1 11-11l5 5 5-5a8 8 0 0 1 11 11Z" fill="none" stroke="${c}" stroke-width="3"/>`,
 diamond:`<path d="m24 4 18 15-18 25L6 19zM6 19h36M24 4l-7 15 7 25 7-25z" fill="none" stroke="${c}" stroke-width="3" stroke-linejoin="round"/>`,spark:`<path d="M24 3v42M3 24h42M9 9l30 30m0-30L9 39" stroke="${c}" stroke-width="3"/>`,
 "lock":`<rect x="8" y="20" width="32" height="24" rx="4" fill="none" stroke="${c}" stroke-width="3"/><path d="M15 20v-7a9 9 0 0 1 18 0v7" fill="none" stroke="${c}" stroke-width="3"/>`,
 triangle:`<path d="m24 5 20 37H4z" fill="none" stroke="${c}" stroke-width="3" stroke-linejoin="round"/>`,bars:`<path d="M7 9h34v6H7zm0 12h26v6H7zm0 12h18v6H7z" fill="${c}"/>`,
 "apple":`<path d="M24 14c-13-8-21 2-17 16 4 15 14 13 17 9 3 4 13 6 17-9 4-14-4-24-17-16Zm0 0c0-7 4-10 9-11" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round"/>`,
 "seed":`<path d="M24 43V24M24 30C10 30 8 18 9 10c12 0 18 6 15 20Zm0-7c0-11 7-17 16-18 1 12-4 18-16 20" fill="none" stroke="${c}" stroke-width="3" stroke-linejoin="round"/>`,
 "plane":`<path d="m4 27 17-3L20 6l5-2 8 18 11-2 3 3-14 7-7 14-4-1 3-14-16 2z" fill="${c}"/>`,
 "tag":`<path d="M6 7h18l18 18-17 17L6 23z" fill="none" stroke="${c}" stroke-width="3"/><circle cx="16" cy="17" r="3" fill="${c}"/>`,
 "crown":`<path d="m5 14 10 8 9-14 9 14 10-8-5 24H10z" fill="none" stroke="${c}" stroke-width="3" stroke-linejoin="round"/>`,
 "aperture":`<circle cx="24" cy="24" r="18" fill="none" stroke="${c}" stroke-width="3"/><path d="m24 6 9 17-18 2m27-1L24 35l-9-17m9 24 9-18 9 5M6 24l18-1 1 19M8 14l16 10 15-8" fill="none" stroke="${c}" stroke-width="2"/>`
 };
 return paths[name]??paths.sparkles;
}
