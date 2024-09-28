const LoderDonar = async () => {
  const response = await fetch(
    "http://localhost/durbar-20-client/donarList.php"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch the data");
  }

  const data = await response.json();
  return data.data;
};

export default LoderDonar;
