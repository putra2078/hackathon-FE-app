import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function StatusSelector() {
  return (
    <div className="p-2 text-foreground bg-background border border-gray-200 rounded-lg">
      <span className="mr-2">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </span>
      <input
        type="text"
        className="outline-none"
        placeholder="Cari transaksi..."
      />
    </div>
  );
}
