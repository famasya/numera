import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function NotFound({ children }: { children?: ReactNode }) {
	return (
		<div className="space-y-2 p-2">
			<div className="text-gray-600 dark:text-gray-400">
				{children || <p>Halaman yang kamu cari nggak ada.</p>}
			</div>
			<p className="flex items-center gap-2 flex-wrap">
				<button
					type="button"
					onClick={() => window.history.back()}
					className="bg-emerald-500 text-white px-2 py-1 rounded uppercase font-black text-sm"
				>
					Kembali
				</button>
				<Link
					to="/"
					className="bg-cyan-600 text-white px-2 py-1 rounded uppercase font-black text-sm"
				>
					Ke Beranda
				</Link>
			</p>
		</div>
	);
}
