import { useState, useEffect, useCallback, useRef } from "react";

// ── Fonts ────────────────────────────────────────────────
function useFonts() {
  useEffect(() => {
    if (document.getElementById("af-fonts")) return;
    const l = document.createElement("link");
    l.id = "af-fonts"; l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap";
    document.head.appendChild(l);
  }, []);
}

// ── Brand (exact from trademarked SVG) ───────────────────
const BRIGHT = "#42B91D";  // green logomark
const DARK   = "#15250C";  // wordmark forest green
const C = {
  white:"#FFFFFF", off:"#F4FAF5", border:"#D0E8D4", borderDk:"#9FC89F",
  bright:BRIGHT, dark:DARK, mid:"#2A5018", light:"#EAF6E2",
  text:DARK, mid2:"#4A7A3A", dim:"#8AAF7A",
  red:"#C0392B", redBg:"#FEF0EE",
  amber:"#D4820A", amberBg:"#FFF8ED",
  blue:"#1A5FA0", blueBg:"#EEF4FC",
};
const SF = "'Cormorant Garamond',Georgia,serif";
const BF = "'Jost','Helvetica Neue',Arial,sans-serif";
const MF = "'Courier New',monospace";

// ── Exact Acrofins primary-horizontal logo (trademarked SVG) ──
function AcrofinsLogo({ width = 200 }) {
  const h = Math.round(width * 89 / 520);
  return (
    <svg width={width} height={h} viewBox="0 0 520 89" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  const [sc,sSc]=useState(C.dim);
  useEffect(()=>{
    const tick=()=>{
      const ist=new Date(new Date().toLocaleString("en-US",{timeZone:"Asia/Kolkata"}));
      const h=ist.getHours(),m=ist.getMinutes(),s=ist.getSeconds();
      sT(`${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`);
      const open=(h>9||(h===9&&m>=15))&&(h<15||(h===15&&m<=30));
      const pre=(h===9&&m<15)||(h===8&&m>=55);
      if(pre){sSt("PRE-MARKET");sSc(C.amber);}
      else if(open){sSt("● OPEN");sSc(C.bright);}
      else{sSt("CLOSED");sSc(C.red);}
    };
    tick(); const id=setInterval(tick,1000); return()=>clearInterval(id);
  },[]);
  return(
    <div style={{textAlign:"right"}}>
      <div style={{fontFamily:MF,fontSize:"16px",fontWeight:700,color:DARK,letterSpacing:"0.04em"}}>{t} <span style={{fontSize:"11px",color:C.dim,fontWeight:400}}>IST</span></div>
      <div style={{fontFamily:BF,fontSize:"10px",color:sc,fontWeight:600,letterSpacing:"0.12em",marginTop:"2px"}}>{st}</div>
    </div>
  );
}

// ── Bulletproof JSON parser ────────────────────────────────
function safeParseJSON(raw) {
  if (!raw || typeof raw !== "string") return null;
  // Strip ALL markdown fences
  let txt = raw.replace(/```[\w]*\n?/g,"").replace(/```/g,"").trim();
  // Try direct
  try { return JSON.parse(txt); } catch {}
  // Find outermost { } or [ ]
  for (const [op,cl] of [["{","}"],["[","]"]]) {
    const s = txt.indexOf(op);
    if (s === -1) continue;
    let depth=0, end=-1;
    for (let i=s;i<txt.length;i++) {
      if(txt[i]===op) depth++;
      if(txt[i]===cl){depth--;if(depth===0){end=i;break;}}
    }
    if(end!==-1) try{return JSON.parse(txt.slice(s,end+1));}catch{}
  }
  return null;
}

// ── API call ──────────────────────────────────────────────
async function callClaude(sys,msg){
  const body={model:"claude-sonnet-4-20250514",max_tokens:1000,system:sys,
    tools:[{type:"web_search_20250305",name:"web_search"}],
    messages:[{role:"user",content:msg}]};
  const r=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)});
  const d=await r.json();
  if(d.error) throw new Error(d.error.message);
  return (d.content||[]).filter(b=>b.type==="text").map(b=>b.text).join("\n");
}

// ── Loading messages ───────────────────────────────────────
const QUOTES = [
  "Scanning institutional flows…",
  "Reading FII & DII activity…",
  "Checking global market cues…",
  "Analysing Nifty option chain…",
  "Computing support & resistance…",
  "Monitoring crude oil & rupee…",
  "\"The trend is your friend until the bend.\"",
  "\"In investing, what is comfortable is rarely profitable.\" — Robert Arnott",
  "Fetching Q4 earnings results…",
  "Building options strategies for today…",
  "\"Risk comes from not knowing what you're doing.\" — Warren Buffett",
  "Checking India VIX levels…",
  "Processing PCR data…",
  "\"The market is a device for transferring money from the impatient to the patient.\"",
];
function LoadingPulse({ label }) {
  const [qi,sQi]=useState(0);
  useEffect(()=>{const id=setInterval(()=>sQi(q=>(q+1)%QUOTES.length),1800);return()=>clearInterval(id);},[]);
  return(
    <div style={{textAlign:"center",padding:"40px 20px"}}>
      <div style={{width:"36px",height:"36px",border:`3px solid ${C.border}`,borderTop:`3px solid ${BRIGHT}`,borderRadius:"50%",margin:"0 auto 16px",animation:"spin 0.9s linear infinite"}}/>
      <div style={{fontFamily:BF,fontSize:"13px",color:DARK,fontWeight:500,marginBottom:"8px"}}>{label}</div>
      <div style={{fontFamily:BF,fontSize:"11px",color:C.dim,fontStyle:"italic",minHeight:"18px",transition:"all 0.3s"}}>{QUOTES[qi]}</div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}

// ── Shared UI atoms ───────────────────────────────────────
const pill=(label,col,bg)=><span style={{background:bg,color:col,fontFamily:BF,fontSize:"10px",fontWeight:600,padding:"2px 9px",borderRadius:"12px",letterSpacing:"0.06em",display:"inline-block"}}>{label}</span>;
const SH=({ch})=><div style={{fontFamily:BF,fontSize:"10px",fontWeight:600,color:C.dim,letterSpacing:"0.14em",textTransform:"uppercase",marginBottom:"10px",paddingBottom:"6px",borderBottom:`1px solid ${C.border}`}}>{ch}</div>;
const card=(label,value,sub,vc)=>(
  <div style={{background:C.off,border:`1px solid ${C.border}`,borderRadius:"10px",padding:"12px 14px"}}>
    <div style={{fontFamily:BF,fontSize:"10px",color:C.dim,fontWeight:500,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:"4px"}}>{label}</div>
    <div style={{fontFamily:SF,fontSize:"21px",color:vc||DARK,lineHeight:1}}>{value||"—"}</div>
    {sub&&<div style={{fontFamily:BF,fontSize:"11px",color:vc||C.mid2,marginTop:"4px"}}>{sub}</div>}
  </div>
);

// ── Back button ───────────────────────────────────────────
const BackBtn=({go})=>(
  <button onClick={go} style={{display:"flex",alignItems:"center",gap:"6px",background:"none",border:`1px solid ${C.border}`,borderRadius:"8px",padding:"7px 14px",fontFamily:BF,fontSize:"12px",fontWeight:500,color:C.mid2,cursor:"pointer",marginBottom:"16px"}}>
    ← Back to Dashboard
  </button>
);

// ══════════════════════════════════════════════════════════
// SECTION: MARKET BRIEFING
// ══════════════════════════════════════════════════════════
function BriefingPage({data,loading,go}){
  if(loading) return <><BackBtn go={go}/><LoadingPulse label="Fetching live market data…"/></>;
  if(!data) return <><BackBtn go={go}/><div style={{textAlign:"center",padding:"40px",fontFamily:BF,color:C.dim}}>No data yet. Go back and press Generate Live Briefing.</div></>;

  const {outlook="",riskLevel="",narrative="",markets={},keyFactors=[]}=data;
  const bear=outlook.toLowerCase().includes("bear")||outlook.toLowerCase().includes("crash")||outlook.toLowerCase().includes("sharp");
  const bull=outlook.toLowerCase().includes("bull");
  const oc=bear?C.red:bull?C.mid:C.amber;
  const ocBg=bear?C.redBg:bull?C.light:C.amberBg;
  const rc=riskLevel==="EXTREME"||riskLevel==="HIGH"?C.red:riskLevel==="MEDIUM"?C.amber:C.mid;

  // Format narrative into bullets
  const bullets=narrative.split(/\.\s+/).filter(s=>s.trim().length>10).map(s=>s.trim().replace(/\.$/,"")+".").filter((_,i)=>i<6);

  return(
    <div>
      <BackBtn go={go}/>
      {/* Outlook banner */}
      <div style={{background:ocBg,border:`1.5px solid ${oc}50`,borderRadius:"14px",padding:"18px 22px",marginBottom:"16px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"12px"}}>
        <div>
          <div style={{fontFamily:BF,fontSize:"10px",color:C.dim,letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:"6px"}}>Today's Market Outlook</div>
          <div style={{fontFamily:SF,fontSize:"28px",color:oc,fontStyle:"italic",fontWeight:600}}>{outlook||"Fetching…"}</div>
        </div>
        <div style={{textAlign:"right"}}>
          <div style={{fontFamily:BF,fontSize:"10px",color:C.dim,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:"6px"}}>Risk Level</div>
          <div style={{fontFamily:SF,fontSize:"26px",color:rc,fontStyle:"italic",fontWeight:600}}>{riskLevel||"—"}</div>
        </div>
      </div>

      {/* Metrics */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"8px",marginBottom:"16px"}}>
        {card("Nifty 50",markets.nifty,markets.niftyChg,markets.niftyChg?.startsWith("+")?C.mid:C.red)}
        {card("GIFT Nifty",markets.giftNifty,markets.giftChg,markets.giftChg?.startsWith("+")?C.mid:C.red)}
        {card("India VIX",markets.vix,"Fear gauge",parseFloat(markets.vix)>20?C.red:C.mid)}
        {card("Brent Crude",markets.crude,markets.crudeChg,C.amber)}
        {card("USD / INR",markets.usdinr,"Rupee rate",C.blue)}
        {card("FII MTD",markets.fiiMtd,"Net foreign flow",markets.fiiMtd?.includes("-")?C.red:C.mid)}
      </div>

      {/* Narrative as bullets */}
      {bullets.length>0&&(
        <div style={{padding:"16px 18px",background:C.light,borderLeft:`4px solid ${BRIGHT}`,borderRadius:"0 12px 12px 0",marginBottom:"16px"}}>
          <div style={{fontFamily:BF,fontSize:"10px",fontWeight:600,color:C.mid2,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:"10px"}}>Market Narrative</div>
          {bullets.map((b,i)=>(
            <div key={i} style={{display:"flex",gap:"10px",marginBottom:"8px",alignItems:"flex-start"}}>
              <span style={{color:BRIGHT,fontSize:"10px",marginTop:"4px",flexShrink:0}}>●</span>
              <div style={{fontFamily:BF,fontSize:"13px",color:DARK,lineHeight:"1.7"}}>{b}</div>
            </div>
          ))}
        </div>
      )}

      {/* Key factors */}
      {keyFactors.length>0&&<div>
        <SH ch="Key Factors Driving Market Today"/>
        {keyFactors.map((f,i)=>{
          const fc=f.type==="bearish"?C.red:f.type==="bullish"?C.mid:C.amber;
          return(
            <div key={i} style={{display:"flex",gap:"14px",padding:"10px 0",borderBottom:i<keyFactors.length-1?`1px solid ${C.border}`:"none"}}>
              <span style={{color:fc,fontSize:"11px",flexShrink:0,marginTop:"3px"}}>{f.type==="bearish"?"▼":f.type==="bullish"?"▲":"◈"}</span>
              <div>
                <div style={{fontFamily:BF,fontSize:"13px",color:DARK,fontWeight:500}}>{f.title}</div>
                {f.detail&&<div style={{fontFamily:BF,fontSize:"12px",color:C.mid2,marginTop:"2px"}}>{f.detail}</div>}
              </div>
            </div>
          );
        })}
      </div>}
    </div>
  );
}

// ══════════════════════════════════════════════════════════
// SECTION: S/R LEVELS + TRADINGVIEW CHART
// ══════════════════════════════════════════════════════════
function LevelsPage({data,loading,go}){
  const tvRef=useRef(null);
  useEffect(()=>{
    if(!tvRef.current) return;
    const sc=document.createElement("script");
    sc.src="https://s3.tradingview.com/tv.js";
    sc.async=true;
    sc.onload=()=>{
      if(window.TradingView) new window.TradingView.widget({
        container_id:"tv-chart-nifty",width:"100%",height:360,
        symbol:"NSE:NIFTY",interval:"15",timezone:"Asia/Kolkata",
        theme:"Light",style:"1",locale:"en",
        toolbar_bg:"#F4FAF5",hide_top_toolbar:false,hide_side_toolbar:false,
        allow_symbol_change:true,details:true,hotlist:true,calendar:false,
        studies:["BB@tv-basicstudies","RSI@tv-basicstudies","MACD@tv-basicstudies"],
      });
    };
    tvRef.current.appendChild(sc);
  },[]);

  if(loading) return <><BackBtn go={go}/><LoadingPulse label="Computing support & resistance levels…"/></>;

  const {current=24050,supports=[],resistances=[],methodology=""}=data||{};
  const allV=[...((data?.resistances)||[]).map(r=>r.value),...((data?.supports)||[]).map(s=>s.value),current];
  const minV=Math.min(...allV)*0.9985,maxV=Math.max(...allV)*1.0015,range=maxV-minV;
  const rows=data?[...(resistances.slice().reverse().map(r=>({...r,side:"R"}))),{label:"CMP",value:current,note:"Current",side:"C"},...supports.map(s=>({...s,side:"S"}))]:[{label:"CMP",value:24050,note:"Live",side:"C"}];

  return(
    <div>
      <BackBtn go={go}/>
      {/* TradingView chart */}
      <div style={{marginBottom:"16px",border:`1px solid ${C.border}`,borderRadius:"12px",overflow:"hidden"}}>
        <div style={{background:C.off,padding:"8px 14px",borderBottom:`1px solid ${C.border}`,fontFamily:BF,fontSize:"11px",color:C.mid2,fontWeight:500}}>
          Nifty 50 — Live Chart (TradingView · 15 min) · BB · RSI · MACD
        </div>
        <div ref={tvRef}>
          <div id="tv-chart-nifty" style={{minHeight:"360px",background:"#f4faf5",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <div style={{fontFamily:BF,fontSize:"12px",color:C.dim}}>Loading TradingView chart… (works in deployed app)</div>
          </div>
        </div>
      </div>

      {!data?<div style={{textAlign:"center",padding:"20px",fontFamily:BF,color:C.dim,fontSize:"13px"}}>Generate the briefing to get AI support & resistance levels.</div>:(
        <>
          <SH ch="AI-Calculated Intraday Price Map"/>
          <div style={{background:C.off,border:`1px solid ${C.border}`,borderRadius:"12px",overflow:"hidden",marginBottom:"14px"}}>
            {rows.map((lvl,i)=>{
              const isCMP=lvl.side==="C";
              const col=lvl.side==="R"?C.red:lvl.side==="S"?C.mid:DARK;
              const pct=Math.max(5,Math.min(95,((lvl.value-minV)/range)*100));
              return(
                <div key={i} style={{display:"flex",alignItems:"center",gap:"12px",padding:isCMP?"13px 16px":"9px 16px",background:isCMP?"#EBF7E5":"transparent",borderLeft:isCMP?`4px solid ${BRIGHT}`:"4px solid transparent",borderBottom:i<rows.length-1?`1px solid ${C.border}`:"none"}}>
                  <span style={{fontFamily:BF,fontSize:"10px",fontWeight:600,color:col,minWidth:"44px",letterSpacing:"0.06em"}}>{isCMP?"▶ CMP":lvl.label}</span>
                  <div style={{flex:1,height:"6px",background:C.border,borderRadius:"3px",position:"relative"}}>
                    <div style={{position:"absolute",left:0,width:`${pct}%`,height:"100%",background:col,borderRadius:"3px",opacity:0.45}}/>
                  </div>
                  <span style={{fontFamily:SF,fontSize:isCMP?"18px":"15px",color:col,minWidth:"80px",textAlign:"right"}}>{lvl.value?.toLocaleString("en-IN")}</span>
                  <span style={{fontFamily:BF,fontSize:"11px",color:C.mid2,minWidth:"110px",textAlign:"right"}}>{lvl.note}</span>
                </div>
              );
            })}
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px",marginBottom:"12px"}}>
            {supports.map((s,i)=>(
              <div key={i} style={{background:C.light,border:`1px solid ${C.borderDk}40`,borderRadius:"10px",padding:"12px"}}>
                <div style={{fontFamily:BF,fontSize:"10px",color:C.mid,fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase"}}>{s.label} Support</div>
                <div style={{fontFamily:SF,fontSize:"20px",color:DARK,margin:"4px 0"}}>{s.value?.toLocaleString("en-IN")}</div>
                <div style={{fontFamily:BF,fontSize:"11px",color:C.mid2}}>{s.note} · –{(current-s.value).toFixed(0)} pts</div>
              </div>
            ))}
            {resistances.map((r,i)=>(
              <div key={i} style={{background:C.redBg,border:`1px solid ${C.red}25`,borderRadius:"10px",padding:"12px"}}>
                <div style={{fontFamily:BF,fontSize:"10px",color:C.red,fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase"}}>{r.label} Resistance</div>
                <div style={{fontFamily:SF,fontSize:"20px",color:DARK,margin:"4px 0"}}>{r.value?.toLocaleString("en-IN")}</div>
                <div style={{fontFamily:BF,fontSize:"11px",color:C.mid2}}>{r.note} · +{(r.value-current).toFixed(0)} pts</div>
              </div>
            ))}
          </div>
          {methodology&&<div style={{fontFamily:BF,fontSize:"11px",color:C.mid2,padding:"10px 14px",background:C.off,border:`1px solid ${C.border}`,borderRadius:"8px",lineHeight:"1.6"}}><strong style={{color:C.mid2}}>Methodology: </strong>{methodology}</div>}
        </>
      )}
    </div>
  );
}

// ══════════════════════════════════════════════════════════
// SECTION: OPTIONS STRATEGIES
// ══════════════════════════════════════════════════════════
const FALLBACK_STRATS=[
  {name:"Bear Put Spread",bias:"bearish",complexity:"Intermediate",setup:"Buy 24000 PE and sell 23700 PE of current weekly expiry. Net debit trade. Profits if Nifty closes below 23700 at expiry.",maxProfit:"₹300 × lot size if Nifty closes below 23700",maxLoss:"Premium paid only (~₹120–150 × lot)",rr:"1:2",when:"Nifty fails to hold 24000 at open with bearish global cues",warn:"Exit if Nifty reclaims 24200 with strong volume"},
  {name:"Long Straddle",bias:"neutral",complexity:"Intermediate",setup:"Buy 24000 CE + 24000 PE of same expiry simultaneously. Profits if Nifty makes a large move (200+ pts) in either direction.",maxProfit:"Unlimited in either direction beyond breakeven",maxLoss:"Total premium paid if Nifty stays flat at 24000",rr:"1:3+ on breakout",when:"High VIX day, major event expected, direction unclear",warn:"IV crush hurts this trade if no big move materialises"},
  {name:"Protective Put",bias:"bullish with hedge",complexity:"Basic",setup:"Hold Nifty spot/ETF position and buy 23800 PE as downside insurance. Limits losses regardless of how far Nifty falls below 23800.",maxProfit:"Unlimited on the upside",maxLoss:"Distance from CMP to 23800 plus put premium",rr:"Asymmetric — limited downside, open upside",when:"Bullish bias but worried about a headline-driven crash",warn:"Put premium reduces net return — choose expiry date carefully"},
];

function StrategiesPage({data,loading,err,go}){
  if(loading) return <><BackBtn go={go}/><LoadingPulse label="Building options strategies for today…"/></>;
  const strats=data&&data.length?data:FALLBACK_STRATS;
  return(
    <div>
      <BackBtn go={go}/>
      <SH ch="Options Strategies — Based on Today's Market Conditions"/>
      {(!data||err)&&<div style={{marginBottom:"12px",padding:"9px 14px",background:C.amberBg,border:`1px solid ${C.amber}30`,borderRadius:"8px",fontFamily:BF,fontSize:"12px",color:C.amber}}>⚠ {err||"Showing template strategies. Generate briefing for live AI-driven strategies."}</div>}
      {strats.map((s,i)=>{
        const bc=s.bias?.includes("bear")?C.red:s.bias?.includes("bull")?C.mid:C.amber;
        const bcBg=s.bias?.includes("bear")?C.redBg:s.bias?.includes("bull")?C.light:C.amberBg;
        return(
          <div key={i} style={{background:C.white,border:`1px solid ${C.border}`,borderLeft:`4px solid ${bc}`,borderRadius:"12px",padding:"18px",marginBottom:"14px",boxShadow:`0 2px 10px ${DARK}09`}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"10px",flexWrap:"wrap",gap:"8px"}}>
              <div>
                <div style={{fontFamily:SF,fontSize:"22px",color:DARK,fontStyle:"italic"}}>{s.name}</div>
                <div style={{display:"flex",gap:"6px",marginTop:"5px",flexWrap:"wrap"}}>
                  {pill(s.bias?.toUpperCase(),bc,bcBg)}
                  {pill(s.complexity?.toUpperCase(),C.mid2,C.off)}
                </div>
              </div>
              <div style={{textAlign:"right",background:C.off,borderRadius:"8px",padding:"8px 14px"}}>
                <div style={{fontFamily:BF,fontSize:"10px",color:C.dim,textTransform:"uppercase",letterSpacing:"0.08em"}}>Risk / Reward</div>
                <div style={{fontFamily:SF,fontSize:"20px",color:DARK}}>{s.rr||s.riskReward||"—"}</div>
              </div>
            </div>
            <div style={{fontFamily:BF,fontSize:"13px",color:DARK,lineHeight:"1.7",marginBottom:"12px"}}>{s.setup}</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"7px"}}>
              {[["Max Profit",s.maxProfit,C.mid,C.light],["Max Loss",s.maxLoss,C.red,C.redBg],["Ideal When",s.when||s.idealWhen,C.blue,C.blueBg]].map(([l,v,col,bg])=>(
                <div key={l} style={{background:bg,borderRadius:"8px",padding:"8px 10px"}}>
                  <div style={{fontFamily:BF,fontSize:"9px",fontWeight:600,color:col,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:"3px"}}>{l}</div>
                  <div style={{fontFamily:BF,fontSize:"11px",color:DARK,lineHeight:"1.4"}}>{v||"—"}</div>
                </div>
              ))}
            </div>
            {(s.warn||s.warning)&&<div style={{marginTop:"10px",padding:"7px 12px",background:C.amberBg,border:`1px solid ${C.amber}40`,borderRadius:"7px",fontFamily:BF,fontSize:"11px",color:C.amber}}>⚠ {s.warn||s.warning}</div>}
          </div>
        );
      })}
    </div>
  );
}

// ══════════════════════════════════════════════════════════
// SECTION: EARNINGS
// ══════════════════════════════════════════════════════════
function EarningsPage({data,loading,go}){
  if(loading) return <><BackBtn go={go}/><LoadingPulse label="Fetching Q4 earnings results…"/></>;
  if(!data) return <><BackBtn go={go}/><div style={{textAlign:"center",padding:"40px",fontFamily:BF,color:C.dim}}>Generate briefing to fetch latest earnings.</div></>;
  if(!data.length) return <><BackBtn go={go}/><div style={{textAlign:"center",padding:"40px",fontFamily:BF,color:C.dim}}>No major earnings reported in the last session.</div></>;
  return(
    <div>
      <BackBtn go={go}/>
      <SH ch="Q4 FY26 Earnings — Actual vs Analyst Estimates"/>
      {data.map((row,i)=>{
        const vc=row.verdict==="BEAT"?C.mid:row.verdict==="MISS"?C.red:C.amber;
        const vb=row.verdict==="BEAT"?C.light:row.verdict==="MISS"?C.redBg:C.amberBg;
        return(
          <div key={i} style={{background:C.white,border:`1px solid ${C.border}`,borderRadius:"10px",padding:"14px 16px",marginBottom:"10px",boxShadow:`0 2px 8px ${DARK}07`}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"10px",flexWrap:"wrap",gap:"8px"}}>
              <div style={{fontFamily:SF,fontSize:"20px",color:DARK,fontStyle:"italic"}}>{row.company}</div>
              {pill(row.verdict,vc,vb)}
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px",marginBottom:"8px"}}>
              <div style={{background:C.off,borderRadius:"7px",padding:"8px 12px"}}>
                <div style={{fontFamily:BF,fontSize:"10px",color:C.dim,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.08em"}}>Analyst Expected</div>
                <div style={{fontFamily:BF,fontSize:"13px",color:C.mid2,marginTop:"3px"}}>{row.expected}</div>
              </div>
              <div style={{background:vb,borderRadius:"7px",padding:"8px 12px"}}>
                <div style={{fontFamily:BF,fontSize:"10px",color:vc,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.08em"}}>Actual Reported</div>
                <div style={{fontFamily:BF,fontSize:"13px",color:DARK,marginTop:"3px"}}>{row.actual}</div>
              </div>
            </div>
            <div style={{fontFamily:BF,fontSize:"12px",color:C.mid2,lineHeight:"1.6"}}>{row.comment}</div>
          </div>
        );
      })}
    </div>
  );
}

// ══════════════════════════════════════════════════════════
// SECTION: SIGNALS
// ══════════════════════════════════════════════════════════
function SignalsPage({data,loading,go}){
  if(loading) return <><BackBtn go={go}/><LoadingPulse label="Fetching institutional signals…"/></>;
  if(!data) return <><BackBtn go={go}/><div style={{textAlign:"center",padding:"40px",fontFamily:BF,color:C.dim}}>Generate briefing to see institutional signals.</div></>;
  const {fii={},dii={},pcr={},vixReading={},globalCues=[]}=data;
  const fn=parseFloat((fii.daily||"0").replace(/[^-\d.]/g,""));
  const dn=parseFloat((dii.daily||"0").replace(/[^-\d.]/g,""));
  const pv=parseFloat(pcr.value||0);
  const vv=parseFloat(vixReading.value||0);
  return(
    <div>
      <BackBtn go={go}/>
      <SH ch="Institutional Flow"/>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px",marginBottom:"16px"}}>
        {[["FII (Foreign Institutions)",fii.daily,fii.mtd,fn<0?C.red:C.mid,fn<0?C.redBg:C.light],
          ["DII (Domestic Institutions)",dii.daily,dii.mtd,dn>0?C.mid:C.red,dn>0?C.light:C.redBg]
        ].map(([l,d,m,col,bg])=>(
          <div key={l} style={{background:bg,border:`1px solid ${col}30`,borderRadius:"12px",padding:"16px"}}>
            <div style={{fontFamily:BF,fontSize:"10px",fontWeight:600,color:col,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:"6px"}}>{l}</div>
            <div style={{fontFamily:SF,fontSize:"26px",color:col}}>{d||"—"}</div>
            <div style={{fontFamily:BF,fontSize:"11px",color:C.mid2,marginTop:"5px"}}>Month-to-date: {m||"—"}</div>
          </div>
        ))}
      </div>
      <SH ch="Sentiment Gauges"/>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px",marginBottom:"16px"}}>
        {[["Put-Call Ratio (PCR)",pcr.value,pcr.reading,pv>1.2?C.red:pv<0.7?C.amber:C.mid],
          ["India VIX",vixReading.value,vixReading.reading,vv>25?C.red:vv>18?C.amber:C.mid]
        ].map(([l,val,reading,col])=>(
          <div key={l} style={{background:C.off,border:`1px solid ${C.border}`,borderRadius:"12px",padding:"16px"}}>
            <div style={{fontFamily:BF,fontSize:"10px",color:C.dim,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"6px"}}>{l}</div>
            <div style={{fontFamily:SF,fontSize:"36px",color:col}}>{val||"—"}</div>
            <div style={{fontFamily:BF,fontSize:"11px",color:C.mid2,marginTop:"5px",lineHeight:"1.5"}}>{reading||"—"}</div>
          </div>
        ))}
      </div>
      {globalCues.length>0&&<>
        <SH ch="Global Market Cues (Overnight)"/>
        <div style={{background:C.off,border:`1px solid ${C.border}`,borderRadius:"12px",overflow:"hidden"}}>
          {globalCues.map((cue,i)=>{
            const cc=cue.direction==="up"?C.mid:cue.direction==="down"?C.red:C.mid2;
            return(
              <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"11px 16px",borderBottom:i<globalCues.length-1?`1px solid ${C.border}`:"none",background:i%2?"#F9FCF9":"transparent"}}>
                <span style={{fontFamily:BF,fontSize:"13px",color:DARK}}>{cue.market}</span>
                <span style={{fontFamily:SF,fontSize:"17px",color:cc}}>{cue.value} {cue.direction==="up"?"▲":cue.direction==="down"?"▼":"—"}</span>
              </div>
            );
          })}
        </div>
      </>}
    </div>
  );
}

// ══════════════════════════════════════════════════════════
// SECTION: NOTES & AI CHAT
// ══════════════════════════════════════════════════════════
function NotesPage({go}){
  const [notes,sN]=useState("");
  const [msgs,sM]=useState([{r:"ai",t:"Good day. I'm your Acrofins AI. Ask me anything — market conditions, trade setups, options theory, or about your notes above. I'll give you sharp, specific answers."}]);
  const [inp,sI]=useState("");
  const [busy,sB]=useState(false);
  const [trades,sT]=useState([]);
  const [tf,sTf]=useState({sym:"",type:"BUY",entry:"",qty:"",sl:"",tgt:""});
  const endRef=useRef(null);
  useEffect(()=>{endRef.current?.scrollIntoView({behavior:"smooth"});},[msgs]);

  const send=async()=>{
    if(!inp.trim()||busy) return;
    const q=inp.trim(); sI(""); sB(true);
    sM(p=>[...p,{r:"user",t:q}]);
    try{
      const ctx=notes?`User's market notes today: "${notes}"\n\n`:"";
      const reply=await callClaude("You are an expert Indian equity markets analyst and trading coach at Acrofins. Be sharp and actionable. Use plain language. Give specific levels, instruments, and percentages. No generic advice.",`${ctx}${q}`);
      sM(p=>[...p,{r:"ai",t:reply.slice(0,600)}]);
    }catch(e){sM(p=>[...p,{r:"ai",t:`Couldn't fetch that. Error: ${e.message}`}]);}
    finally{sB(false);}
  };

  const addTrade=()=>{
    if(!tf.sym||!tf.entry) return;
    sT(p=>[...p,{...tf,time:new Date().toLocaleTimeString("en-IN",{timeZone:"Asia/Kolkata"}),id:Date.now()}]);
    sTf({sym:"",type:"BUY",entry:"",qty:"",sl:"",tgt:""});
  };

  const iS={background:C.off,border:`1px solid ${C.border}`,borderRadius:"7px",padding:"8px 10px",fontFamily:BF,fontSize:"12px",color:DARK,width:"100%",outline:"none",boxSizing:"border-box"};
  return(
    <div>
      <BackBtn go={go}/>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"18px"}}>
        <div>
          <SH ch="My Market Notes"/>
          <textarea value={notes} onChange={e=>sN(e.target.value)} placeholder="Write your observations, chart patterns you see, ideas…" style={{...iS,minHeight:"100px",resize:"vertical",lineHeight:"1.7",marginBottom:"14px"}}/>
          <SH ch="Trade Journal"/>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"6px",marginBottom:"8px"}}>
            <input placeholder="Symbol (e.g. NIFTY)" value={tf.sym} onChange={e=>sTf(p=>({...p,sym:e.target.value}))} style={iS}/>
            <select value={tf.type} onChange={e=>sTf(p=>({...p,type:e.target.value}))} style={{...iS,cursor:"pointer"}}>
              {["BUY","SELL","BUY CALL","BUY PUT","SELL CALL","SELL PUT"].map(t=><option key={t}>{t}</option>)}
            </select>
            <input placeholder="Entry ₹" type="number" value={tf.entry} onChange={e=>sTf(p=>({...p,entry:e.target.value}))} style={iS}/>
            <input placeholder="Qty / Lots" type="number" value={tf.qty} onChange={e=>sTf(p=>({...p,qty:e.target.value}))} style={iS}/>
            <input placeholder="Stop-loss ₹" type="number" value={tf.sl} onChange={e=>sTf(p=>({...p,sl:e.target.value}))} style={iS}/>
            <input placeholder="Target ₹" type="number" value={tf.tgt} onChange={e=>sTf(p=>({...p,tgt:e.target.value}))} style={iS}/>
          </div>
          <button onClick={addTrade} style={{width:"100%",background:DARK,color:"#fff",border:"none",borderRadius:"8px",padding:"10px",fontFamily:BF,fontSize:"12px",fontWeight:600,cursor:"pointer",letterSpacing:"0.06em"}}>+ LOG TRADE</button>
          {trades.map(t=>(
            <div key={t.id} style={{background:C.off,border:`1px solid ${C.border}`,borderRadius:"8px",padding:"10px 12px",marginTop:"8px"}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:"4px"}}>
                <strong style={{fontFamily:SF,fontSize:"15px",color:DARK,fontStyle:"italic"}}>{t.sym}</strong>
                {pill(t.type,t.type.includes("BUY")?C.mid:C.red,t.type.includes("BUY")?C.light:C.redBg)}
              </div>
              <div style={{fontFamily:BF,fontSize:"12px",color:C.mid2}}>Entry: <b style={{color:DARK}}>₹{t.entry}</b> · Qty: <b style={{color:DARK}}>{t.qty}</b> · SL: <b style={{color:C.red}}>₹{t.sl}</b> · Target: <b style={{color:C.mid}}>₹{t.tgt}</b></div>
              <div style={{fontFamily:BF,fontSize:"10px",color:C.dim,marginTop:"3px"}}>{t.time} IST</div>
            </div>
          ))}
        </div>
        <div style={{display:"flex",flexDirection:"column"}}>
          <SH ch="Ask Acrofins AI"/>
          <div style={{flex:1,minHeight:"340px",maxHeight:"420px",overflowY:"auto",background:C.off,border:`1px solid ${C.border}`,borderRadius:"10px",padding:"12px",marginBottom:"10px"}}>
            {msgs.map((m,i)=>(
              <div key={i} style={{marginBottom:"12px",display:"flex",flexDirection:"column",alignItems:m.r==="user"?"flex-end":"flex-start"}}>
                <div style={{fontFamily:BF,fontSize:"9px",color:C.dim,marginBottom:"3px",letterSpacing:"0.08em",textTransform:"uppercase"}}>{m.r==="user"?"You":"Acrofins AI"}</div>
                <div style={{background:m.r==="user"?DARK:C.white,color:m.r==="user"?"#fff":DARK,border:`1px solid ${m.r==="user"?DARK:C.border}`,borderRadius:m.r==="user"?"12px 12px 0 12px":"12px 12px 12px 0",padding:"9px 13px",maxWidth:"88%",fontFamily:BF,fontSize:"12px",lineHeight:"1.65"}}>{m.t}</div>
              </div>
            ))}
            {busy&&<div style={{fontFamily:BF,fontSize:"12px",color:C.dim}}>Acrofins AI is thinking…</div>}
            <div ref={endRef}/>
          </div>
          <div style={{display:"flex",gap:"8px"}}>
            <input value={inp} onChange={e=>sI(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()} placeholder='Ask anything — "Should I hold my put?" or "Explain PCR"' style={{flex:1,...iS}}/>
            <button onClick={send} disabled={busy} style={{background:busy?C.mid2:DARK,color:"#fff",border:"none",borderRadius:"8px",padding:"10px 18px",fontFamily:BF,fontSize:"12px",fontWeight:600,cursor:busy?"wait":"pointer"}}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════
// SECTION: ALERTS
// ══════════════════════════════════════════════════════════
function AlertsPage({go}){
  const [alerts,sA]=useState([
    {l:"Nifty breaks below 23,700",t:"bearish",done:false},
    {l:"India VIX crosses 25",t:"warning",done:false},
    {l:"Crude oil rises above $100/bbl",t:"warning",done:false},
    {l:"FII turns net buyer today",t:"bullish",done:false},
  ]);
  const [na,sNa]=useState("");
  const [nt,sNt]=useState("bearish");
  const tc=t=>t==="bearish"?C.red:t==="bullish"?C.mid:C.amber;
  const tb=t=>t==="bearish"?C.redBg:t==="bullish"?C.light:C.amberBg;
  return(
    <div>
      <BackBtn go={go}/>
      <SH ch="My Session Watchlist — Conditions to Monitor Today"/>
      <div style={{fontFamily:BF,fontSize:"12px",color:C.mid2,marginBottom:"14px",lineHeight:"1.7",padding:"10px 14px",background:C.off,border:`1px solid ${C.border}`,borderRadius:"8px"}}>
        These are your personal visual checkboxes for today's session. Tick them off when conditions are met. Add your own below.
      </div>
      {alerts.map((a,i)=>(
        <div key={i} style={{display:"flex",alignItems:"center",gap:"12px",padding:"10px 14px",background:a.done?C.off:tb(a.t),border:`1px solid ${a.done?C.border:tc(a.t)+"30"}`,borderRadius:"9px",marginBottom:"7px",opacity:a.done?0.5:1,transition:"all 0.2s"}}>
          <input type="checkbox" checked={a.done} onChange={()=>sA(p=>p.map((x,j)=>j===i?{...x,done:!x.done}:x))} style={{accentColor:DARK,width:"16px",height:"16px",cursor:"pointer"}}/>
          <span style={{flex:1,fontFamily:BF,fontSize:"13px",color:a.done?C.dim:tc(a.t),textDecoration:a.done?"line-through":"none"}}>{a.l}</span>
          {pill(a.t.toUpperCase(),tc(a.t),tb(a.t))}
          <button onClick={()=>sA(p=>p.filter((_,j)=>j!==i))} style={{background:"none",border:"none",cursor:"pointer",color:C.dim,fontSize:"18px",padding:"0 4px",lineHeight:1}}>×</button>
        </div>
      ))}
      <div style={{display:"flex",gap:"8px",marginTop:"14px"}}>
        <input value={na} onChange={e=>sNa(e.target.value)} onKeyDown={e=>{if(e.key==="Enter"&&na.trim()){sA(p=>[...p,{l:na.trim(),t:nt,done:false}]);sNa("");}}} placeholder="Add a condition to watch today…" style={{flex:1,background:C.white,border:`1px solid ${C.border}`,borderRadius:"8px",padding:"9px 13px",fontFamily:BF,fontSize:"12px",color:DARK,outline:"none"}}/>
        <select value={nt} onChange={e=>sNt(e.target.value)} style={{background:C.off,border:`1px solid ${C.border}`,borderRadius:"8px",padding:"9px 12px",fontFamily:BF,fontSize:"12px",color:DARK,outline:"none"}}>
          <option value="bearish">Bearish</option>
          <option value="bullish">Bullish</option>
          <option value="warning">Warning</option>
        </select>
        <button onClick={()=>{if(na.trim()){sA(p=>[...p,{l:na.trim(),t:nt,done:false}]);sNa("");}}} style={{background:DARK,color:"#fff",border:"none",borderRadius:"8px",padding:"9px 16px",fontFamily:BF,fontSize:"12px",fontWeight:600,cursor:"pointer"}}>+ Add</button>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════
// HOME SCREEN — Dashboard cards
// ══════════════════════════════════════════════════════════
function HomeScreen({go,onGenerate,loading,data,isLoading,updated}){
  const CARDS=[
    {k:"briefing",icon:"📊",title:"Market Brief",desc:"Live outlook · Nifty · VIX · Crude · Rupee · Narrative"},
    {k:"levels",icon:"📈",title:"S/R Levels",desc:"Support & resistance map with live TradingView chart"},
    {k:"strategies",icon:"⚡",title:"Options Strategies",desc:"AI-built trade strategies for today's conditions"},
    {k:"earnings",icon:"💰",title:"Earnings Tracker",desc:"Q4 results vs analyst estimates — beat/miss/in-line"},
    {k:"signals",icon:"🔍",title:"Institutional Signals",desc:"FII/DII flows · PCR · India VIX · Global indices"},
    {k:"notes",icon:"✏️",title:"Notes & AI Chat",desc:"Trade journal · Personal notes · AI market assistant"},
    {k:"alerts",icon:"🔔",title:"My Alerts",desc:"Custom session watchlist and condition checklist"},
  ];

  const statusOf=k=>{
    if(loading[k]) return {label:"Fetching…",col:C.amber,bg:C.amberBg};
    if(data[k]||(k==="strategies"&&data.strategies)) return {label:"Ready",col:C.mid,bg:C.light};
    if(k==="alerts"||k==="notes") return {label:"Always on",col:C.mid,bg:C.light};
    return {label:"Not generated",col:C.dim,bg:C.off};
  };

  return(
    <div>
      {/* Header message */}
      <div style={{background:C.light,border:`1px solid ${C.border}`,borderRadius:"14px",padding:"16px 20px",marginBottom:"20px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"12px"}}>
        <div>
          <div style={{fontFamily:SF,fontSize:"22px",color:DARK,fontStyle:"italic",fontWeight:600}}>Welcome to ATLAS</div>
          <div style={{fontFamily:BF,fontSize:"12px",color:C.mid2,marginTop:"4px"}}>Your institutional-grade market intelligence platform.</div>
        </div>
        <div style={{fontFamily:BF,fontSize:"11px",color:C.dim,textAlign:"right"}}>
          {updated?<>Last updated<br/><strong style={{color:DARK}}>{updated} IST</strong></>:"Press Generate to begin"}
        </div>
      </div>

      {/* Generate button */}
      <button onClick={onGenerate} disabled={isLoading} style={{width:"100%",padding:"15px",marginBottom:"20px",background:isLoading?C.off:DARK,border:`2px solid ${isLoading?C.border:DARK}`,borderRadius:"12px",cursor:isLoading?"wait":"pointer",color:isLoading?C.mid2:"#fff",fontFamily:BF,fontSize:"13px",fontWeight:600,letterSpacing:"0.08em",transition:"all 0.2s",display:"flex",alignItems:"center",justifyContent:"center",gap:"10px"}}>
        {isLoading
          ?<><span style={{display:"inline-block",animation:"spin 0.9s linear infinite"}}>⟳</span> Fetching all sections in parallel…</>
          :"⟳  Generate Live Market Briefing"}
        <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
      </button>

      {/* Section cards grid */}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"}}>
        {CARDS.map(card=>{
          const st=statusOf(card.k);
          return(
            <div key={card.k} onClick={()=>go(card.k)} style={{background:C.white,border:`1px solid ${C.border}`,borderRadius:"14px",padding:"18px",cursor:"pointer",transition:"all 0.18s",boxShadow:`0 2px 10px ${DARK}07`,position:"relative",overflow:"hidden"}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor=BRIGHT;e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow=`0 6px 20px ${DARK}12`;}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor=C.border;e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow=`0 2px 10px ${DARK}07`;}}>
              <div style={{position:"absolute",top:0,left:0,width:"4px",height:"100%",background:loading[card.k]?C.amber:(data[card.k]?BRIGHT:C.border),borderRadius:"14px 0 0 14px",transition:"background 0.3s"}}/>
              <div style={{fontSize:"24px",marginBottom:"8px"}}>{card.icon}</div>
              <div style={{fontFamily:SF,fontSize:"18px",color:DARK,fontStyle:"italic",fontWeight:600,marginBottom:"4px"}}>{card.title}</div>
              <div style={{fontFamily:BF,fontSize:"11px",color:C.mid2,lineHeight:"1.5",marginBottom:"10px"}}>{card.desc}</div>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                {pill(st.label,st.col,st.bg)}
                <span style={{fontFamily:BF,fontSize:"12px",color:C.dim}}>Open →</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════
// MAIN APP
// ══════════════════════════════════════════════════════════
export default function App(){
  useFonts();
  const [screen,setSc]=useState("home");
  const [loading,setL]=useState({});
  const [data,setD]=useState({});
  const [stratErr,setSErr]=useState(null);
  const [updated,setUp]=useState(null);
  const isLoading=Object.values(loading).some(Boolean);

  const setLk=(k,v)=>setL(p=>({...p,[k]:v}));
  const setDk=(k,v)=>setD(p=>({...p,[k]:v}));

  const today=new Date().toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"});

  const generate=useCallback(async()=>{
    setSErr(null);
    const ds=new Date().toLocaleDateString("en-IN");

    await Promise.all([
      // ── Briefing ──
      (async()=>{
        setLk("briefing",true);
        try{
          const raw=await callClaude(
            "You are an institutional trading analyst for Indian equity markets. Search for current data. CRITICAL: Respond ONLY with a valid JSON object. Do NOT include any text, explanation, or markdown before or after the JSON. Start your response with { and end with }.",
            `Search for Indian stock market data for today ${ds}. Include: Nifty 50 price and change, GIFT Nifty, India VIX, FII/DII flows, Brent crude price and change, USD/INR rate, key market news.
Return ONLY this exact JSON structure (no markdown, no backticks, no explanation):
{"outlook":"e.g. Sharply Bearish","riskLevel":"EXTREME","narrative":"Two to three clear sentences describing what is happening in the market today and why, written in plain English.","markets":{"nifty":"23589","niftyChg":"-461 (-1.92%)","giftNifty":"23520","giftChg":"-500 (-2.08%)","vix":"22.4","crude":"$101.2/bbl","crudeChg":"+5.3%","usdinr":"₹91.80","fiiMtd":"-₹42,300 Cr"},"keyFactors":[{"type":"bearish","title":"Hormuz Blockade Announced","detail":"US-Iran talks collapsed. Trump ordered naval blockade of Strait of Hormuz, spiking crude above $101."},{"type":"bearish","title":"FII Selling Accelerates","detail":"Foreign investors pulling money out aggressively, MTD outflows exceed ₹42,000 Cr."},{"type":"bullish","title":"DII Support at Lower Levels","detail":"Domestic mutual funds and LIC stepping in as buyers near key support zones."}]}`
          );
          const parsed=safeParseJSON(raw);
          if(parsed&&parsed.outlook){setDk("briefing",parsed);}
          else{
            // Last resort: try to extract key values from text
            setDk("briefing",{outlook:"Data fetched — see narrative",riskLevel:"CHECK",narrative:raw.replace(/```[\w]*\n?/g,"").replace(/```/g,"").slice(0,500),markets:{},keyFactors:[]});
          }
        }catch(e){console.error("Briefing error:",e);}
        finally{setLk("briefing",false);}
      })(),

      // ── Levels ──
      (async()=>{
        setLk("levels",true);
        try{
          const raw=await callClaude(
            "You are a Nifty 50 technical analyst. CRITICAL: Return ONLY a valid JSON object. Start with { end with }. No markdown. No explanation.",
            `Search for Nifty 50 support and resistance levels for ${ds}.
Return ONLY this JSON (no other text):
{"current":23589,"supports":[{"label":"S1","value":23400,"note":"Key demand zone"},{"label":"S2","value":23200,"note":"50 DMA"},{"label":"S3","value":22900,"note":"Critical floor"}],"resistances":[{"label":"R1","value":23900,"note":"Immediate ceiling"},{"label":"R2","value":24100,"note":"200 DMA zone"},{"label":"R3","value":24350,"note":"Supply zone"}],"methodology":"Derived from 50/200 DMA, previous swing highs/lows, and maximum OI on option chain"}`
          );
          const parsed=safeParseJSON(raw);
          if(parsed&&parsed.supports) setDk("levels",parsed);
        }catch(e){console.error("Levels error:",e);}
        finally{setLk("levels",false);}
      })(),

      // ── Strategies ──
      (async()=>{
        setLk("strategies",true);setSErr(null);
        try{
          const raw=await callClaude(
            "You are an expert Nifty 50 options strategist. CRITICAL: Your ENTIRE response must be ONLY a valid JSON array. Start with [ and end with ]. No text before or after. No markdown. No backticks.",
            `Market context for ${ds}: Nifty near 23589, India VIX elevated ~22, bearish outlook, FIIs net sellers. Geopolitical risk high.
Return ONLY a JSON array (3 strategies, no other text):
[{"name":"Bear Put Spread","bias":"bearish","complexity":"Intermediate","setup":"Buy 23500 PE and sell 23200 PE of current weekly expiry. Net debit. Profits if Nifty closes below 23200.","maxProfit":"₹300 x lot size below 23200","maxLoss":"Premium paid (~₹120-150 per lot)","rr":"1:2","when":"Nifty fails to reclaim 23700 at open","warn":"Exit if Nifty rallies above 23800 on high volume"},{"name":"Long Put","bias":"bearish","complexity":"Basic","setup":"Buy 23500 PE outright for current expiry. Simple directional bearish bet.","maxProfit":"Unlimited on downside beyond 23500","maxLoss":"Premium paid only","rr":"1:3+ on strong move","when":"High confidence in further downside today","warn":"IV is elevated — you are paying high premium. Use tight expiry."},{"name":"Sell Call Spread","bias":"bearish","complexity":"Intermediate","setup":"Sell 23800 CE and buy 24100 CE of same expiry. Net credit trade. Profit if Nifty stays below 23800.","maxProfit":"Net credit received upfront","maxLoss":"Difference between strikes minus credit (₹300 - credit)","rr":"Defined on both sides","when":"Expecting Nifty to stay below 23800 for the session","warn":"Any surprise rally above 24000 can cause losses — monitor closely"}]`
          );
          const parsed=safeParseJSON(raw);
          if(Array.isArray(parsed)&&parsed.length>0){setDk("strategies",parsed);setSErr(null);}
          else{setSErr("Live strategies unavailable — showing template strategies.");setDk("strategies",FALLBACK_STRATS);}
        }catch(e){setSErr("Live strategies unavailable — showing template strategies.");setDk("strategies",FALLBACK_STRATS);}
        finally{setLk("strategies",false);}
      })(),

      // ── Earnings ──
      (async()=>{
        setLk("earnings",true);
        try{
          const raw=await callClaude(
            "You are a financial analyst. CRITICAL: Return ONLY a valid JSON array. Start with [ end with ]. No text before or after. No markdown.",
            `Search for Q4 FY26 earnings results from Indian NSE/BSE listed companies announced in the last 48 hours as of ${ds}.
Return ONLY a JSON array (empty [] if none found):
[{"company":"TCS","expected":"Net profit ₹12,500 Cr, Revenue ₹62,000 Cr","actual":"Net profit ₹13,718 Cr, Revenue ₹63,973 Cr","verdict":"BEAT","comment":"12% YoY profit growth. Record TCV of $12B. ₹31 final dividend declared."}]`
          );
          const parsed=safeParseJSON(raw);
          setDk("earnings",Array.isArray(parsed)?parsed:[]);
        }catch(e){setDk("earnings",[]);}
        finally{setLk("earnings",false);}
      })(),

      // ── Signals ──
      (async()=>{
        setLk("signals",true);
        try{
          const raw=await callClaude(
            "You are an institutional analyst. CRITICAL: Return ONLY a valid JSON object. Start with { end with }. No markdown. No text before or after.",
            `Search for Indian equity market institutional data for ${ds}: FII/DII flows, Nifty PCR, India VIX, global market indices overnight.
Return ONLY this JSON:
{"fii":{"daily":"-₹2,100 Cr","mtd":"-₹42,300 Cr"},"dii":{"daily":"+₹1,200 Cr","mtd":"+₹38,400 Cr"},"pcr":{"value":"1.08","reading":"Neutral to slightly cautious. More puts than calls bought, but not extreme."},"vixReading":{"value":"22.4","reading":"Elevated — expect 300-400 pt intraday swings. Avoid naked options selling."},"globalCues":[{"market":"Dow Jones Futures","value":"-1.8%","direction":"down"},{"market":"S&P 500 Futures","value":"-1.5%","direction":"down"},{"market":"Nasdaq Futures","value":"-1.2%","direction":"down"},{"market":"Nikkei 225","value":"-2.1%","direction":"down"},{"market":"Brent Crude","value":"$101.2/bbl","direction":"up"},{"market":"Gold","value":"$3,180/oz","direction":"up"}]}`
          );
          const parsed=safeParseJSON(raw);
          if(parsed&&parsed.fii) setDk("signals",parsed);
        }catch(e){console.error("Signals error:",e);}
        finally{setLk("signals",false);}
      })(),
    ]);

    setUp(new Date().toLocaleTimeString("en-IN",{timeZone:"Asia/Kolkata"}));
  },[]);

  const go=useCallback((s)=>setSc(s),[]);

  const screenProps={data,loading,go:()=>setSc("home")};

  return(
    <div style={{background:C.white,color:DARK,fontFamily:BF,minHeight:"100vh",maxWidth:"900px",margin:"0 auto"}}>
      {/* Sticky header */}
      <div style={{background:C.white,borderBottom:`1px solid ${C.border}`,padding:"12px 22px",display:"flex",justifyContent:"space-between",alignItems:"center",boxShadow:`0 2px 12px ${DARK}08`,position:"sticky",top:0,zIndex:10}}>
        <div style={{cursor:"pointer"}} onClick={()=>setSc("home")}>
          <AcrofinsLogo width={180}/>
          <div style={{fontFamily:BF,fontSize:"9px",color:C.dim,letterSpacing:"0.18em",marginTop:"3px",textTransform:"uppercase"}}>ATLAS · Institutional Trading Intelligence</div>
        </div>
        <Clock/>
      </div>

      {/* Sub-header */}
      <div style={{background:C.light,borderBottom:`1px solid ${C.border}`,padding:"5px 22px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <span style={{fontFamily:BF,fontSize:"11px",color:C.mid2}}>{today}</span>
        {screen!=="home"&&<span onClick={()=>setSc("home")} style={{fontFamily:BF,fontSize:"11px",color:C.mid,cursor:"pointer",fontWeight:500}}>← Dashboard</span>}
      </div>

      <div style={{padding:"18px 22px"}}>
        {screen==="home"&&<HomeScreen go={go} onGenerate={generate} loading={loading} data={data} isLoading={isLoading} updated={updated}/>}
        {screen==="briefing"&&<BriefingPage data={data.briefing} loading={loading.briefing} go={()=>setSc("home")}/>}
        {screen==="levels"&&<LevelsPage data={data.levels} loading={loading.levels} go={()=>setSc("home")}/>}
        {screen==="strategies"&&<StrategiesPage data={data.strategies} loading={loading.strategies} err={stratErr} go={()=>setSc("home")}/>}
        {screen==="earnings"&&<EarningsPage data={data.earnings} loading={loading.earnings} go={()=>setSc("home")}/>}
        {screen==="signals"&&<SignalsPage data={data.signals} loading={loading.signals} go={()=>setSc("home")}/>}
        {screen==="notes"&&<NotesPage go={()=>setSc("home")}/>}
        {screen==="alerts"&&<AlertsPage go={()=>setSc("home")}/>}

        <div style={{borderTop:`1px solid ${C.border}`,marginTop:"28px",paddingTop:"12px",display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:"4px"}}>
          <span style={{fontFamily:BF,fontSize:"10px",color:C.dim}}>© 2026 Acrofins · ATLAS v2.0</span>
          <span style={{fontFamily:BF,fontSize:"10px",color:C.dim}}>For educational use only · Not financial advice · Trade at own risk</span>
        </div>
      </div>
    </div>
  );
}
