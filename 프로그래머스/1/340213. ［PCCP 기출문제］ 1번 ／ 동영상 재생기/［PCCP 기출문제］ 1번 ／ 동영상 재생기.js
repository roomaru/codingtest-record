function solution(video_len, pos, op_start, op_end, commands) {
    function toSec(t) {
        const [m, s] = t.split(":").map(Number);
        return m * 60 + s;
    }
    
    function toStr(sec) {
        const m = String(Math.floor(sec / 60)).padStart(2, '0');
        const s = String(sec % 60).padStart(2, '0');
        return `${m}:${s}`;
    }
    
    const video = toSec(video_len);
    let cur = toSec(pos);
    const start = toSec(op_start);
    const end = toSec(op_end);
    
    if (cur >= start && cur < end) cur = end;
    
    for (let cmd of commands) {
        if (cmd === "prev") cur = Math.max(0, cur - 10);
        else if (cmd === "next") cur = Math.min(video, cur + 10);
        
        if (cur >= start && cur < end) cur = end;
    }
    
    return toStr(cur);
}