import { Skeleton } from "../skeletons";

export default function BarangTableSkeleton() {
  return (
    <div className="overflow-x-auto">
      <h2 className="text-xl font-bold mb-4">Daftar Semua Barang</h2>
      <div className="mb-4 flex items-center justify-between">
        <Skeleton className="h-10 w-64 rounded-md" />
        <Skeleton className="h-10 w-10 rounded-full" />
      </div>
      <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">ID Barang</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Nama Barang</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Harga</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Aksi</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {[...Array(8)].map((_, i) => (
            <tr key={i}>
              <td className="px-4 py-3">
                <Skeleton className="h-4 w-8" />
              </td>
              <td className="px-4 py-3">
                <Skeleton className="h-4 w-48" />
              </td>
              <td className="px-4 py-3">
                <Skeleton className="h-4 w-24" />
              </td>
              <td className="px-4 py-3 flex gap-2">
                <Skeleton className="h-6 w-6 rounded" />
                <Skeleton className="h-6 w-6 rounded" />
                <Skeleton className="h-6 w-6 rounded" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
