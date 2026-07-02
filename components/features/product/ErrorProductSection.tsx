export default function ErrorProductSection({errorMsg}: {errorMsg: string}) {
  return (
    <div className="flex flex-col gap-6 bg-surface rounded-2xl p-6 shadow border">
        <h2>Sedang Terjadi Gangguan Saat ini</h2>
        <p>{errorMsg}</p>
    </div>
  );
}
