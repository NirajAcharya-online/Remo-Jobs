import Container from "../Container/Container";

const DashboardSkeleton = () => (
  <Container>
    <div className="max-w-3xl mx-auto">
      <header className="mb-8 flex justify-between items-end">
        <div className="space-y-3">
          <div className="h-8 w-64 bg-gray-200 rounded-lg"></div>
          <div className="h-4 w-40 bg-gray-200 rounded-md"></div>
        </div>
        <div className="h-10 w-28 bg-gray-200 rounded-lg"></div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white rounded-2xl border border-gray-100 p-8 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
            <div className="space-y-2">
              <div className="h-6 w-48 bg-gray-200 rounded"></div>
              <div className="h-4 w-32 bg-gray-200 rounded"></div>
            </div>
          </div>
          <hr className="border-gray-100" />
          <div className="space-y-4">
            <div className="h-4 w-full bg-gray-100 rounded"></div>
            <div className="h-4 w-5/6 bg-gray-100 rounded"></div>
            <div className="h-4 w-4/6 bg-gray-100 rounded"></div>
          </div>
        </div>

        <div className="bg-gray-200 rounded-2xl h-64 shadow-sm"></div>
      </div>
    </div>
  </Container>
);
export default DashboardSkeleton;
