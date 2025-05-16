import RevenueChartWrapper from '@/app/ui/dashboard/revenue-chart';
import CardWrapper from '@/app/ui/dashboard/cards';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { fetchLatestInvoices } from '@/app/lib/data';
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';

export default async function DashboardPage() {
  const latestInvoices = await fetchLatestInvoices();

  return (
    <main>
      <div className="ml-32 w-full px-4 sm:px-8 md:px-16 lg:px-24 py-8 flex justify-center">
        <div className="w-full max-w-[1070px] bg-white rounded-2xl p-6">
          <h1 className="text-center text-black text-3xl font-bold mb-6">Dashboard</h1>

          {/* Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Suspense fallback={<CardsSkeleton />}>
              <CardWrapper />
            </Suspense>
          </div>

          {/* Chart + Latest Invoices */}
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
            <Suspense fallback={<RevenueChartSkeleton />}>
              <RevenueChartWrapper />
            </Suspense>

            <Suspense fallback={<LatestInvoicesSkeleton />}>
              <LatestInvoices latestInvoices={latestInvoices} />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}
