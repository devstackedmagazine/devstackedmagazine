import { ReactNode } from "react";

export default function EmptyState({
  label,
  title,
  description,
  action,
}: {
  label: string;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-start gap-4 border border-rule bg-shelf p-12">
      <span className="text-label text-ash">{label}</span>
      <h3 className="text-heading text-bone">{title}</h3>
      <p className="text-body max-w-[45ch] text-ash">{description}</p>
      {action}
    </div>
  );
}
