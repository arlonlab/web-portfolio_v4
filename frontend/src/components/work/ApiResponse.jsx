const ApiResponse = ({ t, apiResponse }) => {
  if (!apiResponse) return null;

  return (
    <div className="mt-6 border border-gray-200 rounded-sm">
      <div className="bg-gray-100 px-4 py-2 border-b font-bold flex justify-between">
        <span>{t.work.response}</span>
        <span className="text-emerald-600">200 OK</span>
      </div>

      <div className="bg-[#1e1e1e] p-4 text-emerald-400 overflow-x-auto text-xs whitespace-pre">
        {JSON.stringify(apiResponse, null, 2)}
      </div>
    </div>
  );
};

export default ApiResponse;