import { DataTable } from '@/components/ui';
import { payments } from '@/bd';
import { Payment, columns } from './columns';

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return payments as Payment[];
}

export default async function Page() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
