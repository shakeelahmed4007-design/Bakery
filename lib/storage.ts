// Type stubs for Cloudflare bindings (runtime check on Cloudflare, unused on Vercel)
type D1Database = unknown;
type R2Bucket = unknown;

export function storage(env: Record<string, unknown>){const e=env as {DB:D1Database,BUCKET:R2Bucket};if(!e.DB||!e.BUCKET)throw new Error('Storage unavailable');return e;}
export function sameOrigin(request:Request){const origin=request.headers.get('origin');return !origin||origin===new URL(request.url).origin;}
export function eventMinimum(){return new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Karachi',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date(Date.now()+2*86400000));}

