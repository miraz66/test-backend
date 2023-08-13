import { useParams } from "react-router-dom";

export default function NotFound() {
  const { id } = useParams();
  return (
    <div className="text-4xl text-red-500 pt-10">Page {id} NotFound 404</div>
  );
}
