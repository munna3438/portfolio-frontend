export default function RouteEyebrow({ path, className }: { path: string; className?: string }) {
  return (
    <div className={`flex items-center gap-2 font-mono text-xs text-pine mb-4 ${className ?? ""}`}>
      <span className="rounded-sm bg-pine/10 px-1.5 py-0.5 text-pineDark">GET</span>
      <span className="text-muted">{path}</span>
    </div>
  );
}
