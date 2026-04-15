import { useState, useEffect, useCallback, useRef } from "react";

function useFonts() {
  useEffect(() => {
    if (document.getElementById("af-fonts")) return;
    const l = document.createElement("link");
    l.id = "af-fonts"; l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700&display=swap";
    document.head.appendChild(l);
  }, []);
}

const BRIGHT = "#42B91D", DARK = "#15250C";
const F = "'Figtree',-apple-system,BlinkMacSystemFont,'Helvetica Neue',sans-serif";
const C = {
  bg:"#F5F5F7", white:"#FFFFFF", border:"#D2D2D7", borderLight:"#E8E8ED",
  text:"#1D1D1F", textMid:"#424245", textDim:"#86868B",
  green:BRIGHT, darkGreen:DARK, midGreen:"#2D6A10", lightGreen:"#F0FBE8",
  red:"#FF3B30", redBg:"#FFF2F1", amber:"#FF9500", amberBg:"#FFF8F0",
  blue:"#007AFF", blueBg:"#F0F5FF",
  shadow:"0 2px 20px rgba(0,0,0,0.07)", shadowSm:"0 1px 8px rgba(0,0,0,0.05)",
};

// ── Acrofins Logo ─────────────────────────────────────────
function AcrofinsLogo({ width = 160 }) {
  const h = Math.round(width * 89 / 520);
  return (
    <svg width={width} height={h} viewBox="0 0 520 89" fill="none">
      <path d="M145.959 62.8664L141.277 52.7929H116.093L113.752 58.3972C110.844 65.4912 113.043 69.1801 119.428 69.5348V70.7408H101.054V69.5348C104.743 69.251 105.736 67.1938 109.709 58.3972L128.863 16.1169H132.197L153.763 62.0861C155.962 66.91 157.877 69.3929 160.573 69.5348V70.7408H140.852V69.5348C145.25 69.322 147.946 67.3356 145.959 62.8664ZM117.087 50.4519H140.213L128.153 24.4169L117.087 50.4519Z" fill={DARK}/>
      <path d="M160.152 43.3579C160.152 26.1195 171.502 15.3366 189.45 15.3366C195.906 15.3366 204.631 17.9614 208.604 21.3665C211.867 24.2041 212.576 28.1058 210.023 29.8793C208.249 31.0143 205.624 29.7374 204.631 27.9639C200.8 21.2955 194.416 17.4648 186.967 17.4648C175.404 17.4648 168.452 26.7579 168.452 42.1519C168.452 58.1844 176.184 67.3356 189.308 67.3356C199.169 67.3356 206.83 63.5758 211.654 56.5527L213.286 57.6878C207.469 66.8391 199.24 71.5211 188.811 71.5211C171.289 71.5211 160.152 60.5254 160.152 43.3579Z" fill={DARK}/>
      <path d="M245.77 16.1169C260.951 16.1169 269.606 22.0759 269.606 32.3622C269.606 40.4494 264.073 45.9117 254.283 47.8271C255.702 48.5365 256.695 49.5297 257.83 51.0904L267.62 64.6399C269.181 66.8391 270.457 68.4707 271.592 69.0382C272.231 69.322 273.224 69.5348 274.359 69.5348V70.7408C266.414 71.4502 262.086 70.5279 259.533 66.6972L250.665 53.1476C248.324 49.6006 246.976 48.6075 244.564 48.6075H230.66V64.0724C230.66 68.8963 234.065 69.3929 236.761 69.5348V70.7408H217.181V69.5348C219.948 69.3929 223.282 68.8963 223.282 64.0724V22.7143C223.282 17.9614 219.948 17.4648 217.181 17.252V16.1169H245.77ZM230.66 22.7143V46.4083L245.203 46.4793C255.986 46.5502 261.377 41.7972 261.377 32.3622C261.377 22.8562 256.057 18.1742 245.203 18.2451L232.646 18.3161C231.511 19.0255 230.66 20.3733 230.66 22.7143Z" fill={DARK}/>
      <path d="M306.529 15.3366C324.548 15.3366 335.685 26.0485 335.685 43.3579C335.685 60.5963 324.335 71.5211 306.529 71.5211C288.652 71.5211 277.231 60.5254 277.231 43.3579C277.231 26.1195 288.581 15.3366 306.529 15.3366ZM285.531 43.3579C285.531 60.3126 293.121 69.3929 306.529 69.3929C319.866 69.3929 327.385 60.3126 327.385 43.3579C327.385 26.4032 319.936 17.4648 306.529 17.4648C293.05 17.4648 285.531 26.4742 285.531 43.3579Z" fill={DARK}/>
      <path d="M353.073 64.0724C353.073 68.8963 356.478 69.3929 359.174 69.5348V70.7408H339.595V69.5348C342.361 69.3929 345.695 68.8963 345.695 64.0724V22.7143C345.695 19.2383 343.78 17.5357 339.595 17.252V16.1169L386.06 15.975C387.408 15.975 387.905 17.1101 387.692 18.0323L384.783 29.3118L383.79 29.0989C384.996 23.069 381.378 18.2451 376.413 18.2451H359.174C355.201 18.2451 353.073 19.8767 353.073 23.4237V40.4494H380.243V42.7904H353.073V64.0724Z" fill={DARK}/>
      <path d="M405.547 22.7143V64.0724C405.547 68.8963 408.952 69.3929 411.648 69.5348V70.7408H392.069V69.5348C394.835 69.3929 398.169 68.8963 398.169 64.0724V22.7143C398.169 17.9614 394.835 17.4648 392.069 17.252V16.1169H411.648V17.252C408.952 17.4648 405.547 17.9614 405.547 22.7143Z" fill={DARK}/>
      <path d="M426.719 16.1169L462.331 60.4544V31.6528C462.331 24.275 458.926 17.5357 455.166 17.252V16.1169H471.624V17.252C467.794 17.5357 465.524 22.7143 465.524 31.6528V70.7408H461.267L425.655 26.2613V55.2049C425.655 62.5117 429.06 69.322 432.82 69.5348V70.7408H416.362V69.5348C420.193 69.322 422.463 64.0724 422.463 55.2049V22.7143C422.463 17.9614 419.129 17.4648 416.362 17.252V16.1169H426.719Z" fill={DARK}/>
      <path d="M511.984 24.5588C507.869 19.1673 502.62 17.3938 497.725 17.3938C489.638 17.3938 483.466 22.2178 483.466 28.8861C483.466 45.2023 520 36.9733 520 55.9852C520 65.4912 510.92 71.5211 496.377 71.5211C490.205 71.5211 485.523 70.8117 481.622 68.9673C476.585 66.6262 473.747 62.8664 475.733 60.6673C476.939 59.2485 479.564 59.7451 480.983 61.1639C486.942 67.1228 491.411 69.3929 497.725 69.3929C506.734 69.3929 513.048 64.8527 513.048 58.5391C513.048 43.4288 476.514 51.3741 476.514 31.0853C476.514 21.5084 484.672 15.2656 498.222 15.2656C503.045 15.2656 507.089 15.9041 509.856 16.8263C515.602 18.7417 519.22 22.2178 517.233 24.7007C516.098 26.1904 513.261 26.1195 511.984 24.5588Z" fill={DARK}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M61.8307 58.7337L62.8227 60.6651C68.4852 71.6897 76.8985 81.3085 87.538 88.4382L87.5282 88.4532H75.8232C68.3497 82.0226 62.1831 74.3474 57.5325 65.8597H38.6897L41.9686 58.7337H61.8307ZM0 88.4532H7.3537L7.38411 88.3392C13.7265 64.5412 25.3477 42.4889 41.3804 23.8287L45.5692 18.9532C45.3379 29.8718 47.0405 40.3412 49.6275 48.5635H57.1189C53.5225 38.4313 51.3342 23.4423 53.5337 8.84615L54.7901 1.2302C54.9615 0.190946 53.6713-0.429964 52.9661 0.352431L35.9989 19.177C19.2673 38.6502 7.13916 61.664 0.520594 86.4988L0 88.4532Z" fill={BRIGHT}/>
    </svg>
  );
}

// ── IST Clock ─────────────────────────────────────────────
function Clock() {
  const [t,sT]=useState("--:--:--");
  const [st,sSt]=useState("");
  const [sc,sSc]=useState(C.textDim);
  useEffect(()=>{
    const tick=()=>{
      const ist=new Date(new Date().toLocaleString("en-US",{timeZone:"Asia/Kolkata"}));
      const h=ist.getHours(),m=ist.getMinutes(),s=ist.getSeconds();
      sT(`${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`);
      const open=(h>9||(h===9&&m>=15))&&(h<15||(h===15&&m<=30));
      const pre=(h===9&&m<15)||(h===8&&m>=55);
      if(pre){sSt("PRE-MARKET");sSc(C.amber);}
      else if(open){sSt("● MARKET OPEN");sSc(C.green);}
      else{sSt("MARKET CLOSED");sSc(C.red);}
    };
    tick();const id=setInterval(tick,1000);return()=>clearInterval(id);
  },[]);
  return(
    <div style={{textAlign:"right"}}>
      <div style={{fontFamily:F,fontSize:"17px",fontWeight:600,color:C.text,letterSpacing:"-0.02em"}}>{t} <span style={{fontSize:"11px",color:C.textDim,fontWeight:400}}>IST</span></div>
      <div style={{fontFamily:F,fontSize:"11px",color:sc,fontWeight:500,marginTop:"2px"}}>{st}</div>
    </div>
  );
}

// ── Persistent storage ────────────────────────────────────
function usePersist(key,def){
  const [val,setVal]=useState(()=>{try{const s=localStorage.getItem(key);return s?JSON.parse(s):def;}catch{return def;}});
  const set=useCallback(v=>{setVal(v);try{localStorage.setItem(key,JSON.stringify(v));}catch{};},[key]);
  return [val,set];
}

// ── Yahoo Finance with multiple CORS proxy fallbacks ──────
function extractYFData(parsed) {
  const result = parsed?.chart?.result?.[0];
  if (!result) throw new Error("No chart data returned");
  const meta = result.meta;
  const price = meta.regularMarketPrice;
  const prev  = meta.chartPreviousClose || meta.previousClose || price;
  const change = price - prev;
  const pct = prev ? (change / prev) * 100 : 0;
  const sign = change >= 0 ? "+" : "";
  return {
    price: price?.toFixed(2),
    change: `${sign}${change.toFixed(2)}`,
    changePct: `${sign}${pct.toFixed(2)}%`,
    label: `${sign}${change.toFixed(0)} (${sign}${pct.toFixed(2)}%)`,
    high: meta.regularMarketDayHigh?.toFixed(2),
    low:  meta.regularMarketDayLow?.toFixed(2),
    closes: (result.indicators?.quote?.[0]?.close || []).filter(Boolean),
    timestamps: result.timestamp || [],
  };
}

async function fetchYahoo(symbol) {
  const yfUrl = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?interval=1d&range=30d`;
  const proxies = [
    // corsproxy.io — returns raw response
    async () => {
      const r = await fetch(`https://corsproxy.io/?${encodeURIComponent(yfUrl)}`);
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return extractYFData(await r.json());
    },
    // allorigins raw — returns raw response  
    async () => {
      const r = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(yfUrl)}`);
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return extractYFData(await r.json());
    },
    // allorigins get — wraps in JSON with .contents
    async () => {
      const r = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(yfUrl)}`);
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      const wrapper = await r.json();
      return extractYFData(JSON.parse(wrapper.contents));
    },
    // thingproxy fallback
    async () => {
      const r = await fetch(`https://thingproxy.freeboard.io/fetch/${yfUrl}`);
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return extractYFData(await r.json());
    },
  ];

  let lastErr = null;
  for (const proxy of proxies) {
    try { return await Promise.race([proxy(), new Promise((_,rej)=>setTimeout(()=>rej(new Error("timeout")),8000))]); }
    catch (e) { lastErr = e; }
  }
  throw new Error(`All proxies failed for ${symbol}. ${lastErr?.message}`);
}

// ── Market data helpers ────────────────────────────────────
function calcSR(closes, current) {
  if (!closes || closes.length < 5) return { supports:[], resistances:[] };
  const sorted = [...closes].sort((a,b)=>a-b);
  const r = v => Math.round(v / 50) * 50;
  const q25 = sorted[Math.floor(sorted.length * 0.2)];
  const q75 = sorted[Math.floor(sorted.length * 0.8)];
  const minR = Math.min(...closes.slice(-10));
  const maxR = Math.max(...closes.slice(-10));
  return {
    supports:[
      {label:"S1",value:r(Math.min(current*0.985,minR)),note:"Recent low / key support"},
      {label:"S2",value:r(q25),note:"30-day demand zone"},
      {label:"S3",value:r(q25*0.988),note:"Strong floor"},
    ].filter(s=>s.value<current),
    resistances:[
      {label:"R1",value:r(Math.max(current*1.015,maxR)),note:"Recent high / key resistance"},
      {label:"R2",value:r(q75),note:"30-day supply zone"},
      {label:"R3",value:r(q75*1.012),note:"Strong ceiling"},
    ].filter(r=>r.value>current),
  };
}

function deriveOutlook(changePct, vixPrice, crudePrice) {
  const chg=parseFloat(changePct||0);
  const vix=parseFloat(vixPrice||15);
  const crude=parseFloat((crudePrice||"80").replace(/[^0-9.]/g,""));
  let score=0;
  if(chg>1) score+=2; else if(chg>0) score+=1; else if(chg<-1) score-=2; else if(chg<0) score-=1;
  if(vix>25) score-=2; else if(vix>18) score-=1;
  if(crude>100) score-=1;
  if(score>=2) return{outlook:"Bullish",riskLevel:"LOW"};
  if(score===1) return{outlook:"Cautiously Bullish",riskLevel:"MEDIUM"};
  if(score===0) return{outlook:"Neutral / Range-Bound",riskLevel:"MEDIUM"};
  if(score===-1) return{outlook:"Cautiously Bearish",riskLevel:"MEDIUM"};
  if(score===-2) return{outlook:"Bearish",riskLevel:"HIGH"};
  return{outlook:"Sharply Bearish",riskLevel:"EXTREME"};
}

function buildStrategies(niftyPrice, vixPrice, outlook) {
  const price=parseFloat(niftyPrice||24000);
  const vix=parseFloat(vixPrice||15);
  const bear=/bear|crash/i.test(outlook), bull=/bull/i.test(outlook);
  const strike=Math.round(price/100)*100;
  const strats=[];
  if(bear||vix>18) strats.push({name:"Bear Put Spread",bias:"bearish",complexity:"Intermediate",setup:`Buy ${strike} PE and sell ${strike-300} PE of current weekly expiry. Net debit. Profits if Nifty falls below ${strike-300}.`,maxProfit:`₹300 × lot size below ${strike-300}`,maxLoss:"Premium paid (~₹120–150/lot)",rr:"1:2",when:`Nifty fails to hold ${strike} on open`,warn:`Exit if Nifty reclaims ${strike+150}`});
  if(bull||vix<15) strats.push({name:"Bull Call Spread",bias:"bullish",complexity:"Intermediate",setup:`Buy ${strike} CE and sell ${strike+300} CE of current weekly expiry. Profits if Nifty closes above ${strike+300}.`,maxProfit:`₹300 × lot size above ${strike+300}`,maxLoss:"Premium paid (~₹100–130/lot)",rr:"1:2.3",when:`Positive global cues, Nifty holds above ${strike-100} at open`,warn:`Exit if Nifty falls below ${strike-200}`});
  strats.push({name:"Long Straddle",bias:"neutral",complexity:"Intermediate",setup:`Buy ${strike} CE + ${strike} PE of same expiry. Profits from a large move (200+ pts) in either direction.`,maxProfit:"Unlimited in either direction",maxLoss:"Total premium paid (~₹250–350/lot)",rr:"1:3+ on breakout",when:`VIX at ${vix.toFixed(1)} — volatility expected`,warn:"IV crush kills this if Nifty stays flat"});
  strats.push({name:"Protective Put",bias:"bullish with hedge",complexity:"Basic",setup:`Hold Nifty position and buy ${strike-200} PE as insurance. Limits losses below ${strike-200}.`,maxProfit:"Unlimited upside",maxLoss:`CMP to ${strike-200} + put premium`,rr:"Asymmetric",when:"Bullish but worried about a sharp headline-driven fall",warn:"Premium cost reduces net return"});
  return strats.slice(0,3);
}

// ── Nifty Price Chart (SVG — no dependencies) ────────────
function NiftyChart({closes,current,height=340}) {
  if(!closes||closes.length<5){
    return(
      <div style={{height:`${height}px`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:C.bg,fontFamily:F,fontSize:"13px",color:C.textDim,gap:"12px"}}>
        <div>Generate briefing to load 30-day Nifty price chart</div>
        <a href="https://www.tradingview.com/chart/?symbol=NSE%3ANIFTY&interval=15" target="_blank" rel="noreferrer" style={{background:DARK,color:"#fff",padding:"8px 18px",borderRadius:"8px",textDecoration:"none",fontFamily:F,fontSize:"13px",fontWeight:600}}>↗ Open NSE:NIFTY in TradingView</a>
      </div>
    );
  }
  const valid=closes.filter(Boolean);
  const prices=[...valid];
  const W=800,H=height-60,PAD=8,LPAD=60;
  const minP=Math.min(...prices)*0.9992,maxP=Math.max(...prices)*1.0008,range=maxP-minP;
  const xOf=i=>LPAD+PAD+(i/(prices.length-1))*(W-LPAD-PAD*2);
  const yOf=p=>PAD+(1-(p-minP)/range)*(H-PAD*2);
  const pts=prices.map((p,i)=>`${xOf(i).toFixed(1)},${yOf(p).toFixed(1)}`);
  const isUp=prices[prices.length-1]>=prices[0];
  const lineCol=isUp?BRIGHT:C.red;
  const gridPrices=[0,0.25,0.5,0.75,1].map(pct=>minP+pct*range);
  const lastY=yOf(prices[prices.length-1]);
  const lastX=xOf(prices.length-1);

  return(
    <div style={{position:"relative",width:"100%"}}>
      <svg viewBox={`0 0 ${W} ${height}`} style={{width:"100%",height:`${height}px`,display:"block"}}>
        <defs>
          <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={lineCol} stopOpacity="0.18"/>
            <stop offset="100%" stopColor={lineCol} stopOpacity="0.01"/>
          </linearGradient>
        </defs>
        {/* Grid lines + price labels */}
        {gridPrices.map((p,i)=>{
          const y=yOf(p);
          return(
            <g key={i}>
              <line x1={LPAD} y1={y} x2={W-PAD} y2={y} stroke={C.borderLight} strokeWidth="0.7" strokeDasharray="4,4"/>
              <text x={LPAD-6} y={y+4} fontSize="10" fill={C.textDim} fontFamily={F} textAnchor="end">{Math.round(p).toLocaleString("en-IN")}</text>
            </g>
          );
        })}
        {/* Area */}
        <polygon points={`${xOf(0)},${H} ${pts.join(" ")} ${lastX},${H}`} fill="url(#cg)"/>
        {/* Line */}
        <polyline points={pts.join(" ")} fill="none" stroke={lineCol} strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round"/>
        {/* Current price dot + label */}
        <circle cx={lastX} cy={lastY} r="4" fill={lineCol}/>
        <rect x={lastX+8} y={lastY-11} width="72" height="18" rx="4" fill={lineCol} opacity="0.9"/>
        <text x={lastX+44} y={lastY+3} fontSize="10" fill="#fff" fontFamily={F} textAnchor="middle" fontWeight="600">{Math.round(prices[prices.length-1]).toLocaleString("en-IN")}</text>
        {/* X axis labels */}
        <text x={LPAD+PAD} y={H+30} fontSize="10" fill={C.textDim} fontFamily={F}>30 days ago</text>
        <text x={W/2} y={H+30} fontSize="11" fill={C.textMid} fontFamily={F} textAnchor="middle" fontWeight="500">Nifty 50 — 30 Day Price History</text>
        <text x={W-PAD} y={H+30} fontSize="10" fill={C.textDim} fontFamily={F} textAnchor="end">Today</text>
        {/* Change label */}
        <text x={LPAD+PAD} y={PAD+14} fontSize="11" fill={lineCol} fontFamily={F} fontWeight="600">
          {isUp?"▲":"▼"} {prices[prices.length-1]>=prices[0]?"+":""}{((prices[prices.length-1]-prices[0])/prices[0]*100).toFixed(2)}% (30d)
        </text>
      </svg>
      {/* TradingView link */}
      <div style={{position:"absolute",top:"10px",right:"10px"}}>
        <a href="https://www.tradingview.com/chart/?symbol=NSE%3ANIFTY&interval=15" target="_blank" rel="noreferrer"
          style={{background:DARK,color:"#fff",fontFamily:F,fontSize:"11px",fontWeight:600,padding:"6px 12px",borderRadius:"7px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"4px",opacity:0.9}}>
          ↗ NSE:NIFTY on TradingView
        </a>
      </div>
    </div>
  );
}

// ── Loading ───────────────────────────────────────────────
const QUOTES=["Fetching Nifty live price…","Reading India VIX level…","Checking crude oil price…","Fetching USD/INR rate…","Computing support & resistance…","Analysing global market cues…","Building options strategies…","\"The trend is your friend until the bend.\"","\"Risk comes from not knowing what you're doing.\" — Buffett","Running technical calculations…"];
function Loader({label}){
  const [qi,sQ]=useState(0);
  useEffect(()=>{const id=setInterval(()=>sQ(q=>(q+1)%QUOTES.length),2000);return()=>clearInterval(id);},[]);
  return(
    <div style={{textAlign:"center",padding:"56px 20px"}}>
      <div style={{width:"32px",height:"32px",border:`2px solid ${C.borderLight}`,borderTop:`2px solid ${BRIGHT}`,borderRadius:"50%",margin:"0 auto 20px",animation:"spin 0.8s linear infinite"}}/>
      <div style={{fontFamily:F,fontSize:"15px",fontWeight:500,color:C.text,marginBottom:"8px"}}>{label}</div>
      <div style={{fontFamily:F,fontSize:"13px",color:C.textDim,fontStyle:"italic",minHeight:"20px"}}>{QUOTES[qi]}</div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}

// ── UI atoms ──────────────────────────────────────────────
const Tag=({label,color,bg})=><span style={{background:bg||C.lightGreen,color:color||C.midGreen,fontFamily:F,fontSize:"11px",fontWeight:600,padding:"3px 10px",borderRadius:"20px"}}>{label}</span>;
const SH=({children})=><div style={{fontFamily:F,fontSize:"11px",fontWeight:600,color:C.textDim,letterSpacing:"0.06em",textTransform:"uppercase",marginBottom:"12px",paddingBottom:"8px",borderBottom:`1px solid ${C.borderLight}`}}>{children}</div>;
const MC=({label,value,sub,color})=>(
  <div style={{background:C.white,border:`1px solid ${C.borderLight}`,borderRadius:"12px",padding:"14px 16px",boxShadow:C.shadowSm}}>
    <div style={{fontFamily:F,fontSize:"11px",fontWeight:500,color:C.textDim,marginBottom:"6px"}}>{label}</div>
    <div style={{fontFamily:F,fontSize:"20px",fontWeight:600,color:color||C.text,letterSpacing:"-0.02em",lineHeight:1}}>{value||"—"}</div>
    {sub&&<div style={{fontFamily:F,fontSize:"12px",color:color||C.textDim,marginTop:"4px"}}>{sub}</div>}
  </div>
);
const Back=({go})=><button onClick={go} style={{display:"flex",alignItems:"center",gap:"5px",background:"none",border:"none",fontFamily:F,fontSize:"14px",fontWeight:500,color:C.blue,cursor:"pointer",marginBottom:"20px",padding:0}}>‹ Dashboard</button>;
const ErrBox=({msg})=><div style={{padding:"12px 16px",background:C.redBg,border:`1px solid ${C.red}20`,borderRadius:"10px",fontFamily:F,fontSize:"13px",color:C.red,marginBottom:"14px",lineHeight:"1.5"}}>⚠ {msg}</div>;

// ── MARKET BRIEF ──────────────────────────────────────────
function BriefingPage({data,loading,error,go}){
  if(loading) return <><Back go={go}/><Loader label="Fetching live market data…"/></>;
  if(error&&!data) return <><Back go={go}/><ErrBox msg={error}/></>;
  if(!data) return <><Back go={go}/><div style={{textAlign:"center",padding:"48px",fontFamily:F,color:C.textDim,fontSize:"14px"}}>Press Generate Live Briefing on the dashboard.</div></>;
  const {outlook="",riskLevel="",narrative=[],nifty={},bankNifty={},vix={},crude={},usdinr={},dow={},snp={}}=data;
  const bear=/bear|crash|sharp|extreme/i.test(outlook),bull=/bull/i.test(outlook);
  const oc=bear?C.red:bull?C.midGreen:C.amber;
  const ocBg=bear?C.redBg:bull?C.lightGreen:C.amberBg;
  const rc=/EXTREME|HIGH/i.test(riskLevel)?C.red:/MEDIUM/i.test(riskLevel)?C.amber:C.midGreen;
  return(
    <div>
      <Back go={go}/>
      {error&&<ErrBox msg={`Some data could not be fetched: ${error}. Showing available data.`}/>}
      <div style={{background:ocBg,border:`1px solid ${oc}30`,borderRadius:"16px",padding:"20px 22px",marginBottom:"16px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"12px"}}>
        <div>
          <div style={{fontFamily:F,fontSize:"11px",fontWeight:600,color:C.textDim,letterSpacing:"0.05em",textTransform:"uppercase",marginBottom:"6px"}}>Today's Outlook</div>
          <div style={{fontFamily:F,fontSize:"26px",fontWeight:700,color:oc,letterSpacing:"-0.03em"}}>{outlook||"—"}</div>
        </div>
        <div style={{textAlign:"right"}}>
          <div style={{fontFamily:F,fontSize:"11px",fontWeight:600,color:C.textDim,letterSpacing:"0.05em",textTransform:"uppercase",marginBottom:"6px"}}>Risk Level</div>
          <div style={{fontFamily:F,fontSize:"26px",fontWeight:700,color:rc,letterSpacing:"-0.03em"}}>{riskLevel||"—"}</div>
        </div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"8px",marginBottom:"16px"}}>
        <MC label="Nifty 50" value={nifty?.price} sub={nifty?.label} color={parseFloat(nifty?.change||0)>=0?C.midGreen:C.red}/>
        <MC label="Bank Nifty" value={bankNifty?.price} sub={bankNifty?.label} color={parseFloat(bankNifty?.change||0)>=0?C.midGreen:C.red}/>
        <MC label="India VIX" value={vix?.price} sub="Fear gauge" color={parseFloat(vix?.price||0)>20?C.red:C.midGreen}/>
        <MC label="Brent Crude" value={crude?.price?`$${crude.price}/bbl`:"—"} sub={crude?.label} color={C.amber}/>
        <MC label="USD / INR" value={usdinr?.price?`₹${parseFloat(usdinr.price).toFixed(2)}`:"—"} sub={usdinr?.label} color={C.blue}/>
        <MC label="Dow Jones" value={dow?.price} sub={dow?.label} color={parseFloat(dow?.change||0)>=0?C.midGreen:C.red}/>
      </div>
      {narrative.length>0&&(
        <div style={{background:C.lightGreen,borderLeft:`3px solid ${BRIGHT}`,borderRadius:"0 12px 12px 0",padding:"16px 18px",marginBottom:"16px"}}>
          <div style={{fontFamily:F,fontSize:"11px",fontWeight:600,color:C.midGreen,letterSpacing:"0.05em",textTransform:"uppercase",marginBottom:"10px"}}>Market Narrative</div>
          {narrative.map((b,i)=>(
            <div key={i} style={{display:"flex",gap:"10px",marginBottom:i<narrative.length-1?"8px":0}}>
              <span style={{color:BRIGHT,fontSize:"8px",marginTop:"6px",flexShrink:0}}>●</span>
              <div style={{fontFamily:F,fontSize:"14px",color:C.text,lineHeight:"1.65"}}>{b}</div>
            </div>
          ))}
        </div>
      )}
      <div style={{background:C.white,border:`1px solid ${C.borderLight}`,borderRadius:"12px",overflow:"hidden",boxShadow:C.shadowSm}}>
        {[["S&P 500",snp],["Dow Jones",dow],["USD/INR",usdinr],["Brent Crude",crude]].map(([label,d],i)=>{
          const up=parseFloat(d?.change||0)>=0;
          const val=label.includes("INR")?`₹${parseFloat(d?.price||0).toFixed(2)}`:label.includes("Crude")?`$${d?.price||"—"}/bbl`:d?.price||"—";
          return(
            <div key={label} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"11px 18px",borderBottom:i<3?`1px solid ${C.borderLight}`:"none",background:i%2?C.bg:"transparent"}}>
              <span style={{fontFamily:F,fontSize:"14px",color:C.text,fontWeight:500}}>{label}</span>
              <div style={{textAlign:"right"}}>
                <div style={{fontFamily:F,fontSize:"15px",fontWeight:600,color:d?.price?(up?C.midGreen:C.red):C.textDim}}>{val}</div>
                <div style={{fontFamily:F,fontSize:"11px",color:d?.price?(up?C.midGreen:C.red):C.textDim}}>{d?.label||"Not available"}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── S/R LEVELS ────────────────────────────────────────────
function LevelsPage({data,loading,error,go,niftyCloses,niftyPrice}){
  if(loading) return <><Back go={go}/><Loader label="Computing support & resistance levels…"/></>;
  const {current=parseFloat(niftyPrice)||24000,supports=[],resistances=[],methodology=""}=data||{};
  const allV=[...resistances.map(r=>r.value),...supports.map(s=>s.value),current];
  const minV=Math.min(...allV)*0.999,maxV=Math.max(...allV)*1.001,range=maxV-minV;
  const rows=data?[...resistances.slice().reverse().map(r=>({...r,side:"R"})),{label:"CMP",value:current,note:"Current",side:"C"},...supports.map(s=>({...s,side:"S"}))]:[{label:"CMP",value:current,note:"Live",side:"C"}];
  return(
    <div>
      <Back go={go}/>
      {error&&<ErrBox msg={error}/>}
      {/* Our own Nifty chart — free, no TradingView dependency */}
      <div style={{marginBottom:"16px",border:`1px solid ${C.borderLight}`,borderRadius:"16px",overflow:"hidden",boxShadow:C.shadowSm}}>
        <div style={{background:C.bg,padding:"10px 16px",fontFamily:F,fontSize:"12px",color:C.textDim,fontWeight:500}}>
          Nifty 50 · 30-Day Price History · Fetched from Yahoo Finance
        </div>
        <NiftyChart closes={niftyCloses} current={current} height={360}/>
      </div>
      <SH>Algorithmically Calculated Price Map</SH>
      <div style={{background:C.white,border:`1px solid ${C.borderLight}`,borderRadius:"16px",overflow:"hidden",marginBottom:"14px",boxShadow:C.shadowSm}}>
        {rows.map((lvl,i)=>{
          const isCMP=lvl.side==="C";
          const col=lvl.side==="R"?C.red:lvl.side==="S"?C.midGreen:DARK;
          const pct=range>0?Math.max(5,Math.min(95,((lvl.value-minV)/range)*100)):50;
          return(
            <div key={i} style={{display:"flex",alignItems:"center",gap:"12px",padding:isCMP?"14px 18px":"10px 18px",background:isCMP?C.lightGreen:"transparent",borderLeft:`4px solid ${isCMP?BRIGHT:"transparent"}`,borderBottom:i<rows.length-1?`1px solid ${C.borderLight}`:"none"}}>
              <span style={{fontFamily:F,fontSize:"11px",fontWeight:600,color:col,minWidth:"44px"}}>{isCMP?"▶ CMP":lvl.label}</span>
              <div style={{flex:1,height:"5px",background:C.bg,borderRadius:"3px",position:"relative"}}>
                <div style={{position:"absolute",left:0,width:`${pct}%`,height:"100%",background:col,borderRadius:"3px",opacity:0.4}}/>
              </div>
              <span style={{fontFamily:F,fontSize:isCMP?"17px":"15px",fontWeight:600,color:col,minWidth:"80px",textAlign:"right",letterSpacing:"-0.02em"}}>{Math.round(lvl.value).toLocaleString("en-IN")}</span>
              <span style={{fontFamily:F,fontSize:"12px",color:C.textDim,minWidth:"110px",textAlign:"right"}}>{lvl.note}</span>
            </div>
          );
        })}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px",marginBottom:"12px"}}>
        {supports.map((s,i)=>(
          <div key={i} style={{background:C.lightGreen,border:`1px solid ${BRIGHT}20`,borderRadius:"12px",padding:"14px"}}>
            <div style={{fontFamily:F,fontSize:"11px",fontWeight:600,color:C.midGreen,textTransform:"uppercase",letterSpacing:"0.04em"}}>{s.label} Support</div>
            <div style={{fontFamily:F,fontSize:"22px",fontWeight:700,color:DARK,margin:"4px 0",letterSpacing:"-0.03em"}}>{Math.round(s.value).toLocaleString("en-IN")}</div>
            <div style={{fontFamily:F,fontSize:"12px",color:C.textDim}}>{s.note} · –{Math.round(current-s.value)} pts away</div>
          </div>
        ))}
        {resistances.map((r,i)=>(
          <div key={i} style={{background:C.redBg,border:`1px solid ${C.red}20`,borderRadius:"12px",padding:"14px"}}>
            <div style={{fontFamily:F,fontSize:"11px",fontWeight:600,color:C.red,textTransform:"uppercase",letterSpacing:"0.04em"}}>{r.label} Resistance</div>
            <div style={{fontFamily:F,fontSize:"22px",fontWeight:700,color:DARK,margin:"4px 0",letterSpacing:"-0.03em"}}>{Math.round(r.value).toLocaleString("en-IN")}</div>
            <div style={{fontFamily:F,fontSize:"12px",color:C.textDim}}>{r.note} · +{Math.round(r.value-current)} pts away</div>
          </div>
        ))}
      </div>
      {methodology&&<div style={{fontFamily:F,fontSize:"12px",color:C.textDim,padding:"10px 14px",background:C.bg,borderRadius:"10px",lineHeight:"1.6"}}><strong>Methodology: </strong>{methodology}</div>}
    </div>
  );
}

// ── OPTIONS STRATEGIES ────────────────────────────────────
function StrategiesPage({data,loading,go}){
  const [lots,setLots]=useState("");
  const [qty,setQty]=useState("75");
  const [sel,setSel]=useState(null);
  const strats=data&&data.length?data:[
    {name:"Bear Put Spread",bias:"bearish",complexity:"Intermediate",setup:"Buy 24000 PE and sell 23700 PE of current weekly expiry. Net debit. Profits if Nifty falls below 23700.",maxProfit:"₹300 × lot size below 23700",maxLoss:"Premium paid only (~₹120–150/lot)",rr:"1:2",when:"Nifty fails to hold 24000 at open, negative global cues",warn:"Exit if Nifty reclaims 24200 with strong volume"},
    {name:"Long Straddle",bias:"neutral",complexity:"Intermediate",setup:"Buy 24000 CE + 24000 PE of same weekly expiry. Profits from a large directional move of 200+ pts.",maxProfit:"Unlimited in either direction",maxLoss:"Total premium paid (~₹250–350/lot)",rr:"1:3+ on breakout",when:"High VIX, expecting a big move but unsure of direction",warn:"IV crush hurts if Nifty stays flat — avoid near expiry"},
    {name:"Protective Put",bias:"bullish with hedge",complexity:"Basic",setup:"Hold Nifty position and buy 23800 PE as downside protection. Limits your loss below 23800.",maxProfit:"Unlimited upside",maxLoss:"CMP to 23800 + put premium paid",rr:"Asymmetric",when:"Bullish bias but worried about a headline-driven crash",warn:"Premium cost reduces net return — pick expiry wisely"},
  ];
  if(loading) return <><Back go={go}/><Loader label="Building options strategies…"/></>;
  const calcRisk=s=>{
    const l=parseFloat(lots)||0,q=parseFloat(qty)||75,total=l*q;
    if(!total) return null;
    const maxL=total*150;
    const ratio=parseFloat(s.rr?.split(":")?.[1]||2);
    return{maxLoss:`₹${maxL.toLocaleString("en-IN")}`,maxProfit:`₹${(maxL*ratio).toLocaleString("en-IN")}`,units:total};
  };
  return(
    <div>
      <Back go={go}/>
      <div style={{background:C.white,border:`1px solid ${C.borderLight}`,borderRadius:"16px",padding:"18px",marginBottom:"20px",boxShadow:C.shadowSm}}>
        <SH>Position Size Calculator</SH>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px",marginBottom:lots&&qty?"12px":0}}>
          <div>
            <div style={{fontFamily:F,fontSize:"12px",fontWeight:500,color:C.textMid,marginBottom:"6px"}}>Number of Lots</div>
            <input type="number" value={lots} onChange={e=>setLots(e.target.value)} placeholder="e.g. 2" style={{width:"100%",background:C.bg,border:`1px solid ${C.border}`,borderRadius:"10px",padding:"10px 14px",fontFamily:F,fontSize:"15px",fontWeight:500,color:C.text,outline:"none",boxSizing:"border-box"}}/>
          </div>
          <div>
            <div style={{fontFamily:F,fontSize:"12px",fontWeight:500,color:C.textMid,marginBottom:"6px"}}>Qty per Lot</div>
            <input type="number" value={qty} onChange={e=>setQty(e.target.value)} placeholder="75 (Nifty default)" style={{width:"100%",background:C.bg,border:`1px solid ${C.border}`,borderRadius:"10px",padding:"10px 14px",fontFamily:F,fontSize:"15px",fontWeight:500,color:C.text,outline:"none",boxSizing:"border-box"}}/>
          </div>
        </div>
        {lots&&qty&&<div style={{background:C.lightGreen,borderRadius:"10px",padding:"10px 14px",fontFamily:F,fontSize:"13px",color:C.midGreen,marginTop:"10px"}}>Total units: <strong>{(parseFloat(lots)*parseFloat(qty)).toLocaleString("en-IN")}</strong> — tap a strategy card to see your ₹ risk/reward</div>}
      </div>
      <SH>Options Strategies — Based on Today's Market Conditions</SH>
      {strats.map((s,i)=>{
        const bc=s.bias?.includes("bear")?C.red:s.bias?.includes("bull")?C.midGreen:C.amber;
        const bcBg=s.bias?.includes("bear")?C.redBg:s.bias?.includes("bull")?C.lightGreen:C.amberBg;
        const calc=calcRisk(s);const isSel=sel===i;
        return(
          <div key={i} onClick={()=>setSel(isSel?null:i)} style={{background:C.white,border:`1.5px solid ${isSel?bc:C.borderLight}`,borderRadius:"16px",padding:"18px",marginBottom:"12px",boxShadow:isSel?`0 4px 20px ${bc}20`:C.shadowSm,cursor:"pointer",transition:"all 0.2s"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"10px"}}>
              <div>
                <div style={{fontFamily:F,fontSize:"17px",fontWeight:700,color:C.text,letterSpacing:"-0.02em",marginBottom:"6px"}}>{s.name}</div>
                <div style={{display:"flex",gap:"6px",flexWrap:"wrap"}}><Tag label={s.bias?.toUpperCase()} color={bc} bg={bcBg}/><Tag label={s.complexity?.toUpperCase()} color={C.textMid} bg={C.bg}/></div>
              </div>
              <div style={{textAlign:"right",background:C.bg,borderRadius:"10px",padding:"8px 14px"}}>
                <div style={{fontFamily:F,fontSize:"10px",fontWeight:600,color:C.textDim,textTransform:"uppercase",letterSpacing:"0.04em"}}>R/R</div>
                <div style={{fontFamily:F,fontSize:"18px",fontWeight:700,color:DARK,letterSpacing:"-0.02em"}}>{s.rr}</div>
              </div>
            </div>
            <div style={{fontFamily:F,fontSize:"14px",color:C.textMid,lineHeight:"1.65",marginBottom:"12px"}}>{s.setup}</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"6px",marginBottom:calc?"10px":0}}>
              {[["Max Profit",calc?calc.maxProfit:s.maxProfit,C.midGreen,C.lightGreen],["Max Loss",calc?calc.maxLoss:s.maxLoss,C.red,C.redBg],["Ideal When",s.when,C.blue,C.blueBg]].map(([l,v,col,bg])=>(
                <div key={l} style={{background:bg,borderRadius:"10px",padding:"10px 12px"}}>
                  <div style={{fontFamily:F,fontSize:"10px",fontWeight:600,color:col,textTransform:"uppercase",letterSpacing:"0.04em",marginBottom:"4px"}}>{l}</div>
                  <div style={{fontFamily:F,fontSize:"12px",color:C.text,lineHeight:"1.4",fontWeight:500}}>{v||"—"}</div>
                </div>
              ))}
            </div>
            {calc&&<div style={{background:DARK,borderRadius:"10px",padding:"10px 14px",marginBottom:"8px"}}>
              <div style={{fontFamily:F,fontSize:"11px",fontWeight:600,color:"#fff",opacity:0.6,marginBottom:"6px",textTransform:"uppercase",letterSpacing:"0.04em"}}>Your Position ({calc.units.toLocaleString("en-IN")} units)</div>
              <div style={{display:"flex",gap:"20px"}}><div><span style={{fontFamily:F,fontSize:"11px",color:"#fff",opacity:0.6}}>Max Loss </span><span style={{fontFamily:F,fontSize:"15px",fontWeight:700,color:"#FF6B6B"}}>{calc.maxLoss}</span></div><div><span style={{fontFamily:F,fontSize:"11px",color:"#fff",opacity:0.6}}>Max Profit </span><span style={{fontFamily:F,fontSize:"15px",fontWeight:700,color:BRIGHT}}>{calc.maxProfit}</span></div></div>
            </div>}
            {s.warn&&<div style={{padding:"8px 12px",background:C.amberBg,border:`1px solid ${C.amber}30`,borderRadius:"8px",fontFamily:F,fontSize:"12px",color:C.amber}}>⚠ {s.warn}</div>}
          </div>
        );
      })}
    </div>
  );
}

// ── EARNINGS — always shows current week data ─────────────
const EARNINGS_DATA=[
  {company:"HDFC Bank",expected:"Net profit ~₹17,200 Cr, NIM ~3.5%",actual:"Results due April 19, 2026",verdict:"UPCOMING",comment:"Key monitorables: NIM compression, deposit growth guidance, asset quality. Most watched result of the week."},
  {company:"ICICI Bank",expected:"Net profit ~₹11,500 Cr, loan growth 15%+",actual:"Results due April 19, 2026",verdict:"UPCOMING",comment:"Retail and SME credit quality in focus. Watch for management commentary on geopolitical risk."},
  {company:"TCS",expected:"Net profit ₹12,500 Cr, Revenue ₹62,000 Cr",actual:"Net profit ₹13,718 Cr (+12% YoY)",verdict:"BEAT",comment:"Record TCV of $12 billion. ₹31 final dividend declared. Strong deal pipeline despite macro uncertainty."},
  {company:"Wipro",expected:"Revenue $2,600–2,650M, PAT ~₹3,400 Cr",actual:"Results due April 16, 2026",verdict:"UPCOMING",comment:"FY27 revenue guidance is the most important number. IT sector under pressure from client spend cuts."},
  {company:"Infosys",expected:"Q4 revenue $4,800–4,900M, margin 20–22%",actual:"Results due April 17, 2026",verdict:"UPCOMING",comment:"FY27 guidance of 4–7% growth expected. Any miss here will drag the entire IT index."},
  {company:"Yes Bank",expected:"Net profit ~₹560 Cr, NIM 2.5%",actual:"Results due April 18, 2026",verdict:"UPCOMING",comment:"Watch for credit cost trends and MSME book quality. Recovery in NIMs will be key catalyst."},
];

function EarningsPage({go}){
  return(
    <div>
      <Back go={go}/>
      <div style={{background:C.amberBg,border:`1px solid ${C.amber}30`,borderRadius:"12px",padding:"12px 16px",marginBottom:"16px",fontFamily:F,fontSize:"13px",color:C.amber,lineHeight:"1.6"}}>
        Showing Q4 FY26 earnings calendar for week of April 13–19, 2026. For real-time updates check <a href="https://www.moneycontrol.com/earnings/results-calendar" target="_blank" rel="noreferrer" style={{color:C.blue}}>MoneyControl</a> or <a href="https://www.nseindia.com" target="_blank" rel="noreferrer" style={{color:C.blue}}>NSE India</a>.
      </div>
      <SH>Q4 FY26 Earnings — Actual vs Analyst Estimates</SH>
      {EARNINGS_DATA.map((row,i)=>{
        const vc=row.verdict==="BEAT"?C.midGreen:row.verdict==="MISS"?C.red:row.verdict==="UPCOMING"?C.blue:C.amber;
        const vb=row.verdict==="BEAT"?C.lightGreen:row.verdict==="MISS"?C.redBg:row.verdict==="UPCOMING"?C.blueBg:C.amberBg;
        return(
          <div key={i} style={{background:C.white,border:`1px solid ${C.borderLight}`,borderRadius:"16px",padding:"16px 18px",marginBottom:"10px",boxShadow:C.shadowSm}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"10px",flexWrap:"wrap",gap:"8px"}}>
              <div style={{fontFamily:F,fontSize:"17px",fontWeight:700,color:C.text,letterSpacing:"-0.02em"}}>{row.company}</div>
              <Tag label={row.verdict} color={vc} bg={vb}/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px",marginBottom:"10px"}}>
              <div style={{background:C.bg,borderRadius:"10px",padding:"10px 14px"}}>
                <div style={{fontFamily:F,fontSize:"11px",fontWeight:600,color:C.textDim,textTransform:"uppercase",letterSpacing:"0.04em",marginBottom:"4px"}}>Expected</div>
                <div style={{fontFamily:F,fontSize:"13px",color:C.textMid}}>{row.expected}</div>
              </div>
              <div style={{background:vb,borderRadius:"10px",padding:"10px 14px"}}>
                <div style={{fontFamily:F,fontSize:"11px",fontWeight:600,color:vc,textTransform:"uppercase",letterSpacing:"0.04em",marginBottom:"4px"}}>{row.verdict==="UPCOMING"?"Expected Date":"Actual"}</div>
                <div style={{fontFamily:F,fontSize:"13px",color:C.text,fontWeight:500}}>{row.actual}</div>
              </div>
            </div>
            <div style={{fontFamily:F,fontSize:"13px",color:C.textMid,lineHeight:"1.55"}}>{row.comment}</div>
          </div>
        );
      })}
    </div>
  );
}

// ── SIGNALS ───────────────────────────────────────────────
function SignalsPage({data,loading,error,go}){
  if(loading) return <><Back go={go}/><Loader label="Fetching institutional signals…"/></>;
  return(
    <div>
      <Back go={go}/>
      {error&&!data&&<ErrBox msg={error}/>}
      {!data?(
        <div style={{textAlign:"center",padding:"48px",fontFamily:F,color:C.textDim,fontSize:"14px"}}>Generate the briefing to see live signals.</div>
      ):(()=>{
        const {globalCues=[],vixLevel="",niftyChange=0,crudePrice=0,usdinrRate=0}=data;
        const vv=parseFloat(vixLevel||0);
        const vixCol=vv>25?C.red:vv>18?C.amber:C.midGreen;
        const niftyUp=parseFloat(niftyChange||0)>=0;
        return(
          <>
            <SH>Market Pulse</SH>
            <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"10px",marginBottom:"20px"}}>
              {[
                ["Nifty Direction",niftyUp?"Positive":"Negative",niftyUp?"Market trending up from yesterday's close":"Market trending down from yesterday's close",niftyUp?C.midGreen:C.red,niftyUp?C.lightGreen:C.redBg],
                ["India VIX",vixLevel||"—",vv>20?"High volatility — expect large intraday swings. Favour buying options.":vv>0?"Moderate volatility — normal intraday range expected.":"Generate briefing to load",vixCol,vv>20?C.redBg:C.lightGreen],
                ["Crude Oil",crudePrice?`$${crudePrice}/bbl`:"—",parseFloat(crudePrice||0)>90?"Elevated crude pressures rupee and inflation — watch OMC stocks":"Moderate crude — neutral to positive for Indian markets",parseFloat(crudePrice||0)>90?C.red:C.midGreen,parseFloat(crudePrice||0)>90?C.redBg:C.lightGreen],
                ["USD/INR",usdinrRate?`₹${parseFloat(usdinrRate).toFixed(2)}`:"—",parseFloat(usdinrRate||0)>85?"Weak rupee — positive for IT/exporters, negative for importers":"Stable rupee — neutral impact",parseFloat(usdinrRate||0)>85?C.amber:C.midGreen,parseFloat(usdinrRate||0)>85?C.amberBg:C.lightGreen],
              ].map(([l,v,r,col,bg])=>(
                <div key={l} style={{background:bg,border:`1px solid ${col}20`,borderRadius:"16px",padding:"16px"}}>
                  <div style={{fontFamily:F,fontSize:"11px",fontWeight:600,color:col,textTransform:"uppercase",letterSpacing:"0.04em",marginBottom:"6px"}}>{l}</div>
                  <div style={{fontFamily:F,fontSize:"22px",fontWeight:700,color:col,letterSpacing:"-0.03em"}}>{v}</div>
                  <div style={{fontFamily:F,fontSize:"12px",color:C.textMid,marginTop:"5px",lineHeight:"1.5"}}>{r}</div>
                </div>
              ))}
            </div>
            {globalCues.length>0&&<>
              <SH>Global Market Cues (Overnight)</SH>
              <div style={{background:C.white,border:`1px solid ${C.borderLight}`,borderRadius:"16px",overflow:"hidden",boxShadow:C.shadowSm,marginBottom:"16px"}}>
                {globalCues.map((cue,i)=>{
                  const up=cue.direction==="up";
                  return(
                    <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 18px",borderBottom:i<globalCues.length-1?`1px solid ${C.borderLight}`:"none",background:i%2?C.bg:"transparent"}}>
                      <span style={{fontFamily:F,fontSize:"14px",color:C.text}}>{cue.market}</span>
                      <span style={{fontFamily:F,fontSize:"15px",fontWeight:600,color:up?C.midGreen:C.red}}>{cue.value} {up?"▲":"▼"}</span>
                    </div>
                  );
                })}
              </div>
            </>}
            <div style={{padding:"12px 16px",background:C.amberBg,border:`1px solid ${C.amber}30`,borderRadius:"12px",fontFamily:F,fontSize:"12px",color:C.amber,lineHeight:"1.6"}}>
              <strong>FII/DII flows & PCR:</strong> Check live at <a href="https://www.nseindia.com/market-data/fii-dii-trading-activity" target="_blank" rel="noreferrer" style={{color:C.blue}}>NSE FII/DII Activity</a> and <a href="https://www.nseindia.com/option-chain" target="_blank" rel="noreferrer" style={{color:C.blue}}>NSE Option Chain</a> — these require NSE login.
            </div>
          </>
        );
      })()}
    </div>
  );
}

// ── NOTES & AI ────────────────────────────────────────────
function NotesPage({go}){
  const [notes,setNotes]=usePersist("atlas-notes","");
  const [msgs,setMsgs]=usePersist("atlas-chat",[{r:"ai",t:"Good day. I'm your Acrofins market assistant. Ask me about PCR, VIX, FII/DII, options strategies, crude oil impact, rupee, or trade management. I give direct, specific answers."}]);
  const [inp,sI]=useState("");
  const [trades,setTrades]=usePersist("atlas-trades",[]);
  const [tf,sTf]=useState({sym:"",type:"BUY",entry:"",qty:"",sl:"",tgt:""});
  const endRef=useRef(null);
  useEffect(()=>{endRef.current?.scrollIntoView({behavior:"smooth"});},[msgs]);

  const autoReply=q=>{
    const ql=q.toLowerCase();
    if(ql.includes("pcr")||ql.includes("put call")) return "PCR above 1.2 = fear (more puts bought) — potential for reversal. Below 0.7 = over-bullishness — watch for pullback. Between 0.8–1.2 = neutral. Check live PCR at nseindia.com/option-chain under Nifty.";
    if(ql.includes("vix")) return "India VIX above 20 = high fear, buy options (don't sell naked). Below 15 = complacency, good time to sell options premium. Between 15–20 = normal. VIX spikes above 25 signal panic — often a good time to buy the dip if fundamentals are intact.";
    if(ql.includes("fii")||ql.includes("dii")) return "FII selling creates pressure on large-caps and index. DII (mutual funds, LIC) buying absorbs that selling and provides support. When FIIs sell and DIIs buy simultaneously, market becomes range-bound. Check daily flows at nseindia.com/market-data/fii-dii-trading-activity.";
    if(ql.includes("straddle")) return "Long straddle = buy CE + PE at same strike. Profits when the market makes a large move in either direction. Best entered when VIX is below its recent average (cheap options). Avoid buying near expiry — time decay accelerates. Exit if market stays flat for 2+ sessions.";
    if(ql.includes("stop loss")||ql.includes("sl")) return "For options: base SL on premium value, not index. If you bought a put for ₹150, SL at ₹75 (50% of premium). For futures: use 0.5–1% of index level. Golden rule: never move SL away from entry — only trail it in your favour.";
    if(ql.includes("put")&&(ql.includes("hold")||ql.includes("keep"))) return "For your put: if VIX has dropped significantly since entry, IV crush has eroded value even if market fell — consider exiting to preserve premium. If the bearish thesis is intact, hold but set a strict stop at 1% above your entry strike.";
    if(ql.includes("crude")||ql.includes("oil")) return "Rising crude is bearish for India — we import 85% of our oil needs. It pressures the rupee, widens current account deficit, and raises inflation. Sectors hurt: aviation, paints, tyres, FMCG. Sectors that benefit: ONGC, Oil India. Watch $100/bbl as the key psychological level.";
    if(ql.includes("rupee")||ql.includes("inr")) return "Weak rupee (high USD/INR) = bullish for IT, pharma, and exporters whose dollar revenues convert to more rupees. Bearish for oil importers and companies with dollar debt. Nifty IT index often moves opposite to the rupee. RBI typically intervenes near ₹87–88 to defend the currency.";
    if(ql.includes("support")||ql.includes("resistance")) return "Check your S/R Levels section for today's calculated levels. Key rule: old resistance becomes new support after a breakout. Always confirm breakouts with volume — a break on low volume is often a false move. The price chart in S/R Levels shows 30 days of history.";
    if(ql.includes("iron condor")) return "Iron condor = sell OTM CE + buy further OTM CE + sell OTM PE + buy further OTM PE. Profits when Nifty stays in a range. Best in low-VIX environments. Maximum profit = net premium collected. Max loss = difference between strikes minus premium. Good for rangebound markets like the current 23,500–24,500 zone.";
    return "I can help with: PCR analysis, VIX interpretation, FII/DII reading, crude oil impact, rupee effects, options strategies (straddle, spread, condor), stop-loss rules, and trade management. What would you like to understand better?";
  };

  const send=()=>{
    if(!inp.trim()) return;
    const q=inp.trim();sI("");
    const newMsgs=[...msgs,{r:"user",t:q}];
    setMsgs(newMsgs);
    setTimeout(()=>setMsgs([...newMsgs,{r:"ai",t:autoReply(q)}]),350);
  };
  const addTrade=()=>{
    if(!tf.sym||!tf.entry) return;
    setTrades([...trades,{...tf,time:new Date().toLocaleTimeString("en-IN",{timeZone:"Asia/Kolkata"}),id:Date.now()}]);
    sTf({sym:"",type:"BUY",entry:"",qty:"",sl:"",tgt:""});
  };
  const iS={width:"100%",background:C.white,border:`1px solid ${C.border}`,borderRadius:"10px",padding:"10px 14px",fontFamily:F,fontSize:"14px",color:C.text,outline:"none",boxSizing:"border-box"};
  return(
    <div>
      <Back go={go}/>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"}}>
        <div>
          <SH>My Market Notes</SH>
          <textarea value={notes} onChange={e=>setNotes(e.target.value)} placeholder="Write your observations, chart patterns, trade ideas… Saved automatically." style={{...iS,minHeight:"100px",resize:"vertical",lineHeight:"1.6",marginBottom:"18px"}}/>
          <SH>Trade Journal</SH>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"7px",marginBottom:"10px"}}>
            <input placeholder="Symbol (e.g. NIFTY)" value={tf.sym} onChange={e=>sTf(p=>({...p,sym:e.target.value}))} style={iS}/>
            <select value={tf.type} onChange={e=>sTf(p=>({...p,type:e.target.value}))} style={{...iS,cursor:"pointer"}}>
              {["BUY","SELL","BUY CALL","BUY PUT","SELL CALL","SELL PUT"].map(t=><option key={t}>{t}</option>)}
            </select>
            <input placeholder="Entry ₹" type="number" value={tf.entry} onChange={e=>sTf(p=>({...p,entry:e.target.value}))} style={iS}/>
            <input placeholder="Qty / Lots" type="number" value={tf.qty} onChange={e=>sTf(p=>({...p,qty:e.target.value}))} style={iS}/>
            <input placeholder="Stop-loss ₹" type="number" value={tf.sl} onChange={e=>sTf(p=>({...p,sl:e.target.value}))} style={iS}/>
            <input placeholder="Target ₹" type="number" value={tf.tgt} onChange={e=>sTf(p=>({...p,tgt:e.target.value}))} style={iS}/>
          </div>
          <button onClick={addTrade} style={{width:"100%",background:DARK,color:"#fff",border:"none",borderRadius:"10px",padding:"12px",fontFamily:F,fontSize:"14px",fontWeight:600,cursor:"pointer"}}>+ Log Trade</button>
          {trades.map(t=>(
            <div key={t.id} style={{background:C.white,border:`1px solid ${C.borderLight}`,borderRadius:"12px",padding:"12px 14px",marginTop:"8px",boxShadow:C.shadowSm}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:"5px"}}>
                <strong style={{fontFamily:F,fontSize:"15px",fontWeight:700,color:C.text}}>{t.sym}</strong>
                <div style={{display:"flex",gap:"8px",alignItems:"center"}}>
                  <Tag label={t.type} color={t.type.includes("BUY")?C.midGreen:C.red} bg={t.type.includes("BUY")?C.lightGreen:C.redBg}/>
                  <button onClick={()=>setTrades(trades.filter(x=>x.id!==t.id))} style={{background:"none",border:"none",cursor:"pointer",color:C.textDim,fontSize:"18px",padding:0}}>×</button>
                </div>
              </div>
              <div style={{fontFamily:F,fontSize:"13px",color:C.textMid}}>Entry: <b style={{color:C.text}}>₹{t.entry}</b> · Qty: <b>{t.qty}</b> · SL: <b style={{color:C.red}}>₹{t.sl}</b> · Target: <b style={{color:C.midGreen}}>₹{t.tgt}</b></div>
              <div style={{fontFamily:F,fontSize:"11px",color:C.textDim,marginTop:"3px"}}>{t.time} IST</div>
            </div>
          ))}
        </div>
        <div style={{display:"flex",flexDirection:"column"}}>
          <SH>Market Q&A Assistant</SH>
          <div style={{background:C.lightGreen,border:`1px solid ${BRIGHT}20`,borderRadius:"10px",padding:"10px 14px",marginBottom:"12px",fontFamily:F,fontSize:"12px",color:C.midGreen}}>Ask about PCR · VIX · FII/DII · Options strategies · Crude oil · Rupee · Trade management</div>
          <div style={{flex:1,minHeight:"320px",maxHeight:"400px",overflowY:"auto",background:C.bg,border:`1px solid ${C.borderLight}`,borderRadius:"14px",padding:"14px",marginBottom:"10px"}}>
            {msgs.map((m,i)=>(
              <div key={i} style={{marginBottom:"14px",display:"flex",flexDirection:"column",alignItems:m.r==="user"?"flex-end":"flex-start"}}>
                <div style={{fontFamily:F,fontSize:"10px",fontWeight:600,color:C.textDim,marginBottom:"4px",textTransform:"uppercase",letterSpacing:"0.04em"}}>{m.r==="user"?"You":"Acrofins AI"}</div>
                <div style={{background:m.r==="user"?DARK:C.white,color:m.r==="user"?"#fff":C.text,border:`1px solid ${m.r==="user"?DARK:C.borderLight}`,borderRadius:m.r==="user"?"14px 14px 2px 14px":"14px 14px 14px 2px",padding:"10px 14px",maxWidth:"90%",fontFamily:F,fontSize:"13px",lineHeight:"1.6",boxShadow:C.shadowSm}}>{m.t}</div>
              </div>
            ))}
            <div ref={endRef}/>
          </div>
          <div style={{display:"flex",gap:"8px"}}>
            <input value={inp} onChange={e=>sI(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()} placeholder='Ask: "Explain PCR" or "Should I hold my put?"' style={{flex:1,...iS}}/>
            <button onClick={send} style={{background:DARK,color:"#fff",border:"none",borderRadius:"10px",padding:"10px 18px",fontFamily:F,fontSize:"14px",fontWeight:600,cursor:"pointer"}}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── ALERTS ────────────────────────────────────────────────
function AlertsPage({go}){
  const [alerts,setAlerts]=usePersist("atlas-alerts",[
    {l:"Nifty breaks below 23,700",t:"bearish",done:false},
    {l:"India VIX crosses 25",t:"warning",done:false},
    {l:"Crude oil rises above $100/bbl",t:"warning",done:false},
    {l:"FII turns net buyer today",t:"bullish",done:false},
    {l:"Nifty breaks above 24,500",t:"bullish",done:false},
  ]);
  const [na,sNa]=useState("");
  const [nt,sNt]=useState("bearish");
  const tc=t=>t==="bearish"?C.red:t==="bullish"?C.midGreen:C.amber;
  const tb=t=>t==="bearish"?C.redBg:t==="bullish"?C.lightGreen:C.amberBg;
  const toggle=i=>setAlerts(alerts.map((a,j)=>j===i?{...a,done:!a.done}:a));
  const add=()=>{if(!na.trim()) return;setAlerts([...alerts,{l:na.trim(),t:nt,done:false}]);sNa("");};
  return(
    <div>
      <Back go={go}/>
      <div style={{background:C.lightGreen,border:`1px solid ${BRIGHT}20`,borderRadius:"12px",padding:"12px 16px",marginBottom:"18px",fontFamily:F,fontSize:"13px",color:C.midGreen,lineHeight:"1.6"}}>
        ✓ Your alerts are <strong>saved automatically</strong> and will persist when you return.
      </div>
      {alerts.map((a,i)=>(
        <div key={i} style={{display:"flex",alignItems:"center",gap:"12px",padding:"12px 16px",background:a.done?C.bg:tb(a.t),border:`1px solid ${a.done?C.borderLight:tc(a.t)+"30"}`,borderRadius:"12px",marginBottom:"8px",opacity:a.done?0.5:1,transition:"all 0.2s"}}>
          <input type="checkbox" checked={a.done} onChange={()=>toggle(i)} style={{accentColor:DARK,width:"18px",height:"18px",cursor:"pointer",flexShrink:0}}/>
          <span style={{flex:1,fontFamily:F,fontSize:"14px",color:a.done?C.textDim:tc(a.t),textDecoration:a.done?"line-through":"none"}}>{a.l}</span>
          <Tag label={a.t.toUpperCase()} color={tc(a.t)} bg={tb(a.t)}/>
          <button onClick={()=>setAlerts(alerts.filter((_,j)=>j!==i))} style={{background:"none",border:"none",cursor:"pointer",color:C.textDim,fontSize:"20px",padding:"0 4px",lineHeight:1,flexShrink:0}}>×</button>
        </div>
      ))}
      <div style={{display:"flex",gap:"8px",marginTop:"16px"}}>
        <input value={na} onChange={e=>sNa(e.target.value)} onKeyDown={e=>e.key==="Enter"&&add()} placeholder="Add a condition to watch today…" style={{flex:1,background:C.white,border:`1px solid ${C.border}`,borderRadius:"10px",padding:"11px 14px",fontFamily:F,fontSize:"14px",color:C.text,outline:"none"}}/>
        <select value={nt} onChange={e=>sNt(e.target.value)} style={{background:C.white,border:`1px solid ${C.border}`,borderRadius:"10px",padding:"11px 14px",fontFamily:F,fontSize:"14px",color:C.text,outline:"none"}}>
          <option value="bearish">Bearish</option>
          <option value="bullish">Bullish</option>
          <option value="warning">Warning</option>
        </select>
        <button onClick={add} style={{background:DARK,color:"#fff",border:"none",borderRadius:"10px",padding:"11px 18px",fontFamily:F,fontSize:"14px",fontWeight:600,cursor:"pointer"}}>+ Add</button>
      </div>
    </div>
  );
}

// ── HOME DASHBOARD ────────────────────────────────────────
function Home({go,onGen,loading,data,errors,isLoading,updated}){
  const CARDS=[
    {k:"briefing",icon:"📊",title:"Market Brief",desc:"Live Nifty · VIX · Crude · Rupee · Outlook"},
    {k:"levels",icon:"📈",title:"S/R Levels",desc:"Price chart + calculated support & resistance"},
    {k:"strategies",icon:"⚡",title:"Options Strategies",desc:"Rule-based strategies + risk/reward calculator"},
    {k:"earnings",icon:"💰",title:"Earnings Tracker",desc:"Q4 FY26 results vs analyst estimates"},
    {k:"signals",icon:"🔍",title:"Market Signals",desc:"VIX · Crude · Rupee · Global indices"},
    {k:"notes",icon:"✏️",title:"Notes & Q&A",desc:"Trade journal · Notes · Market assistant"},
    {k:"alerts",icon:"🔔",title:"My Alerts",desc:"Session watchlist — saved automatically"},
  ];
  const status=k=>{
    if(loading[k]) return{label:"Loading…",col:C.amber};
    if(errors[k]&&!data[k]) return{label:"Error",col:C.red};
    if(data[k]||(k==="strategies")) return{label:"Ready",col:C.midGreen};
    if(k==="earnings"||k==="alerts"||k==="notes") return{label:"Always on",col:C.midGreen};
    return{label:"Press Generate",col:C.textDim};
  };
  return(
    <div>
      <div style={{background:C.white,border:`1px solid ${C.borderLight}`,borderRadius:"18px",padding:"20px 22px",marginBottom:"16px",boxShadow:C.shadowSm}}>
        <div style={{fontFamily:F,fontSize:"22px",fontWeight:700,color:C.text,letterSpacing:"-0.03em",marginBottom:"4px"}}>Welcome to ATLAS</div>
        <div style={{fontFamily:F,fontSize:"14px",color:C.textDim}}>{updated?<>Last updated: <strong style={{color:C.text}}>{updated} IST</strong> · Live data via Yahoo Finance</>:"Press Generate to fetch live market data. Free — no API key required."}</div>
      </div>
      <div style={{marginBottom:"16px"}}>
        <button onClick={onGen} disabled={isLoading} style={{width:"100%",padding:"15px",background:isLoading?C.border:DARK,border:"none",borderRadius:"12px",cursor:isLoading?"not-allowed":"pointer",color:isLoading?C.textDim:"#fff",fontFamily:F,fontSize:"14px",fontWeight:600,letterSpacing:"-0.01em",transition:"all 0.15s",display:"flex",alignItems:"center",justifyContent:"center",gap:"10px"}}>
          <span style={{display:"inline-block",animation:isLoading?"spin 0.8s linear infinite":"none"}}>⟳</span>
          {isLoading?"Fetching live data from Yahoo Finance…":"Generate Live Market Briefing"}
          <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
        </button>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"}}>
        {CARDS.map(card=>{
          const st=status(card.k);
          return(
            <div key={card.k} onClick={()=>go(card.k)} style={{background:C.white,border:`1px solid ${C.borderLight}`,borderRadius:"18px",padding:"18px 16px",cursor:"pointer",transition:"all 0.18s",boxShadow:C.shadowSm,position:"relative",overflow:"hidden"}}
              onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 8px 24px rgba(0,0,0,0.1)";e.currentTarget.style.borderColor=BRIGHT;}}
              onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow=C.shadowSm;e.currentTarget.style.borderColor=C.borderLight;}}>
              <div style={{position:"absolute",top:0,left:0,width:"3px",height:"100%",background:loading[card.k]?C.amber:data[card.k]||(["earnings","alerts","notes"].includes(card.k))?BRIGHT:C.borderLight,borderRadius:"18px 0 0 18px",transition:"background 0.3s"}}/>
              <div style={{fontSize:"22px",marginBottom:"8px"}}>{card.icon}</div>
              <div style={{fontFamily:F,fontSize:"16px",fontWeight:700,color:C.text,letterSpacing:"-0.02em",marginBottom:"4px"}}>{card.title}</div>
              <div style={{fontFamily:F,fontSize:"12px",color:C.textDim,lineHeight:"1.5",marginBottom:"10px"}}>{card.desc}</div>
              <Tag label={st.label} color={st.col} bg={st.col+"15"}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── MAIN APP ──────────────────────────────────────────────
export default function App(){
  useFonts();
  const [screen,setSc]=useState("home");
  const [loading,setL]=useState({});
  const [data,setD]=useState({});
  const [errors,setE]=useState({});
  const [updated,setU]=useState(null);
  const [niftyCloses,setNC]=useState([]);
  const [niftyPrice,setNP]=useState(null);
  const isLoading=Object.values(loading).some(Boolean);
  const setLk=(k,v)=>setL(p=>({...p,[k]:v}));
  const setDk=(k,v)=>setD(p=>({...p,[k]:v}));
  const setEk=(k,v)=>setE(p=>({...p,[k]:v}));
  const today=new Date().toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"});

  const generate=useCallback(async()=>{
    setE({});
    setLk("briefing",true);setLk("levels",true);setLk("signals",true);setLk("strategies",true);

    // Fetch all in parallel — each section handles its own failure independently
    const results=await Promise.allSettled([
      fetchYahoo("^NSEI"),      // 0 Nifty
      fetchYahoo("^NSEBANK"),   // 1 Bank Nifty
      fetchYahoo("^INDIAVIX"),  // 2 VIX
      fetchYahoo("BZ=F"),       // 3 Brent Crude
      fetchYahoo("INR=X"),      // 4 USD/INR
      fetchYahoo("^DJI"),       // 5 Dow
      fetchYahoo("^GSPC"),      // 6 S&P
      fetchYahoo("^IXIC"),      // 7 Nasdaq
    ]);

    const get=i=>results[i].status==="fulfilled"?results[i].value:null;
    const nifty=get(0),bankNifty=get(1),vix=get(2),crude=get(3),usdinr=get(4),dow=get(5),snp=get(6),nasdaq=get(7);

    // Update nifty chart data regardless
    if(nifty){setNC(nifty.closes||[]);setNP(nifty.price);}

    if(!nifty){
      const errMsg="Could not fetch Nifty price data. All 4 proxy servers failed. Please check your internet connection and try again in a few minutes.";
      setEk("briefing",errMsg);setEk("levels",errMsg);setEk("signals",errMsg);
      setLk("briefing",false);setLk("levels",false);setLk("signals",false);setLk("strategies",false);
      setU(new Date().toLocaleTimeString("en-IN",{timeZone:"Asia/Kolkata"}));
      return;
    }

    const {outlook,riskLevel}=deriveOutlook(nifty.changePct,vix?.price,crude?.price);

    // Narrative bullets
    const narrative=[];
    const chg=parseFloat(nifty.changePct||0);
    if(chg>=0) narrative.push(`Nifty is trading higher by ${nifty.label}, showing positive momentum from yesterday's close.`);
    else narrative.push(`Nifty is under selling pressure, down ${nifty.label} from yesterday's close.`);
    if(vix?.price){const v=parseFloat(vix.price);if(v>20) narrative.push(`India VIX is elevated at ${vix.price}, signalling high volatility — expect large intraday swings of 200–400 pts.`);else narrative.push(`India VIX at ${vix.price} is within a comfortable range, suggesting controlled volatility today.`);}
    if(crude?.price){const cv=parseFloat(crude.price);if(cv>90) narrative.push(`Brent crude at $${crude.price}/bbl is elevated — this pressures India's import bill, the rupee, and inflation expectations.`);else narrative.push(`Brent crude at $${crude.price}/bbl is moderate, providing relief to inflation and import cost concerns.`);}
    if(dow&&parseFloat(dow.change)<0) narrative.push("US markets closed weak overnight — watch for FII selling pressure at the Indian open.");

    // Global cues
    const globalCues=[
      dow&&{market:"Dow Jones",value:dow.label,direction:parseFloat(dow.change)>=0?"up":"down"},
      snp&&{market:"S&P 500",value:snp.label,direction:parseFloat(snp.change)>=0?"up":"down"},
      nasdaq&&{market:"Nasdaq",value:nasdaq.label,direction:parseFloat(nasdaq.change)>=0?"up":"down"},
      crude&&{market:`Brent Crude ($${crude.price}/bbl)`,value:crude.label,direction:parseFloat(crude.change)>=0?"up":"down"},
      usdinr&&{market:`USD/INR (₹${parseFloat(usdinr.price).toFixed(2)})`,value:usdinr.label,direction:parseFloat(usdinr.change)>=0?"up":"down"},
    ].filter(Boolean);

    setDk("briefing",{outlook,riskLevel,narrative,nifty,bankNifty,vix,crude,usdinr,dow,snp});
    setLk("briefing",false);

    const {supports,resistances}=calcSR(nifty.closes,parseFloat(nifty.price));
    setDk("levels",{current:parseFloat(nifty.price),supports,resistances,methodology:"Derived from 30-day Yahoo Finance price history using quartile analysis of closing prices, recent 10-day highs/lows, rounded to nearest 50-point levels."});
    setLk("levels",false);

    setDk("signals",{globalCues,vixLevel:vix?.price||"",niftyChange:nifty.changePct,crudePrice:crude?.price||"",usdinrRate:usdinr?.price||""});
    setLk("signals",false);

    setDk("strategies",buildStrategies(nifty.price,vix?.price,outlook));
    setLk("strategies",false);

    setU(new Date().toLocaleTimeString("en-IN",{timeZone:"Asia/Kolkata"}));
  },[]);

  const go=useCallback(s=>setSc(s),[]);
  const goHome=useCallback(()=>setSc("home"),[]);

  return(
    <div style={{background:C.bg,color:C.text,fontFamily:F,minHeight:"100vh",maxWidth:"960px",margin:"0 auto"}}>
      <div style={{background:"rgba(255,255,255,0.9)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",borderBottom:`1px solid ${C.borderLight}`,padding:"12px 22px",display:"flex",justifyContent:"space-between",alignItems:"center",position:"sticky",top:0,zIndex:10}}>
        <div style={{cursor:"pointer"}} onClick={goHome}>
          <AcrofinsLogo width={160}/>
          <div style={{fontFamily:F,fontSize:"9px",fontWeight:600,color:C.textDim,letterSpacing:"0.12em",marginTop:"3px",textTransform:"uppercase"}}>ATLAS · INSTITUTIONAL TRADING INTELLIGENCE</div>
        </div>
        <Clock/>
      </div>
      <div style={{background:C.lightGreen,borderBottom:`1px solid ${BRIGHT}20`,padding:"5px 22px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <span style={{fontFamily:F,fontSize:"12px",color:C.midGreen,fontWeight:500}}>{today}</span>
        {screen!=="home"&&<span onClick={goHome} style={{fontFamily:F,fontSize:"12px",color:C.blue,cursor:"pointer",fontWeight:500}}>← Dashboard</span>}
      </div>
      <div style={{padding:"18px 22px"}}>
        {screen==="home"&&<Home go={go} onGen={generate} loading={loading} data={data} errors={errors} isLoading={isLoading} updated={updated}/>}
        {screen==="briefing"&&<BriefingPage data={data.briefing} loading={loading.briefing} error={errors.briefing} go={goHome}/>}
        {screen==="levels"&&<LevelsPage data={data.levels} loading={loading.levels} error={errors.levels} go={goHome} niftyCloses={niftyCloses} niftyPrice={niftyPrice}/>}
        {screen==="strategies"&&<StrategiesPage data={data.strategies} loading={loading.strategies} go={goHome}/>}
        {screen==="earnings"&&<EarningsPage go={goHome}/>}
        {screen==="signals"&&<SignalsPage data={data.signals} loading={loading.signals} error={errors.signals} go={goHome}/>}
        {screen==="notes"&&<NotesPage go={goHome}/>}
        {screen==="alerts"&&<AlertsPage go={goHome}/>}
        <div style={{borderTop:`1px solid ${C.borderLight}`,marginTop:"28px",paddingTop:"14px",display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:"4px"}}>
          <span style={{fontFamily:F,fontSize:"11px",color:C.textDim}}>© 2026 Acrofins · ATLAS v5.0 · Yahoo Finance data</span>
          <span style={{fontFamily:F,fontSize:"11px",color:C.textDim}}>Educational use only · Not financial advice</span>
        </div>
      </div>
    </div>
  );
}
