import { payments } from '@/data';
import { DataTable, columns } from './';

async function fetchData() {
  return payments;
}

export default async function Page() {
  const data = await fetchData();

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
