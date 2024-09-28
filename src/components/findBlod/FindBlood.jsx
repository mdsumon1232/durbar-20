import { useState } from "react";
import DisplayDonar from "../../components/displayDonarList/DisplayDonar";

const FindBlood = () => {
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [districts, setDistricts] = useState([]);
  const [subDistricts, setSubDistricts] = useState([]);
  const [searchError, setSearchError] = useState(null);
  const [searchData, setSearchData] = useState([]);
  const [response, setResponse] = useState();
  console.log(response);

  const handleFormData = (e) => {
    e.preventDefault();
    const form = e.target;

    const group = form.group.value;
    const division = form.division.value;
    const district = form.district.value;
    const sub_district = form.sub_district.value;

    if (
      group != null &&
      division != null &&
      district != null &&
      sub_district != null
    ) {
      const bloodData = {
        group: group,
        division: division,
        district: district,
        sub_district: sub_district,
      };

      setSearchData([]);
      setSearchError(null);

      const xhr = new XMLHttpRequest();

      xhr.onload = () => {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.response);
          setResponse(response);
          if (response.success === false) {
            setSearchError(response.message);
          } else {
            setSearchData(response.data);
          }
        } else {
          console.log("network error");
        }
      };
      xhr.open(
        "POST",
        "http://localhost/durbar-20-client/searchBlood.php",
        true
      );
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      xhr.send(JSON.stringify(bloodData));
    } else {
      alert("All flied are required");
    }
  };

  const districtList = {
    Barishal: [
      "Barishal",
      "Patuakhali",
      "Bhola",
      "Pirojpur",
      "Barguna",
      "Jhalokati",
    ],
    Chattogram: [
      "Chittagong",
      "Cox_Bazar",
      "Rangamati",
      "Bandarban",
      "Khagrachhari",
      "Feni",
      "Lakshmipur",
      "Comilla",
      "Noakhali",
      "Brahmanbaria",
      "Chandpur",
    ],
    Dhaka: [
      "Dhaka",
      "Narayanganj",
      "Gazipur",
      "Manikgonj",
      "Munshigonj",
      "Narsingdi",
      "Tangail",
      "Kishorgonj",
      "Netrokona",
      "Faridpur",
      "Gopalgonj",
      "Madaripur",
      "Rajbari",
      "Shariatpur",
    ],
    Khulna: [
      "Khulna",
      "Bagherhat",
      "Sathkhira",
      "Jessore",
      "Magura",
      "Jhenaidah",
      "Narail",
      "Kushtia",
      "Chuadanga",
      "Meherpur",
    ],
    Rajshahi: [
      "Rajshahi",
      "Chapainawabganj",
      "Natore",
      "Naogaon",
      "Pabna",
      "Sirajganj",
      "Bogra",
      "Joypurhat",
    ],
    Rangpur: ["Lalmonirhat", "Nilphamari", "Panchagarh", "Rangpur"],
    Mymensingh: [
      "Tangail",
      "Jamalpur",
      "Kishoreganj",
      "Sherpur",
      "Netrokona",
      "Mymensingh",
    ],
    Sylhet: ["Sylhet", "Sunamganj", "Moulvibazar", "Habiganj"],
  };

  const subDistrictList = {
    Barishal: [
      "Barishal Sadar",
      "Bakerganj",
      "Babuganj",
      "Banaripara",
      "Gaurnadi",
      "Hizla",
      "Mehendiganj",
      "Muladi",
      "Wazirpur",
    ],
    Bhola: [
      "Bhola Sadar",
      "Burhanuddin",
      "Char Fasson",
      "Daulatkhan",
      "Lalmohan",
      "Monpura",
      "Tazumuddin",
    ],
    Jhalokati: ["Jhalokathi Sadar", "Kathalia", "Nalchity", "Rajapur"],
    Barguna: ["Barguna Sadar", "Amtali", "Betagi", "Bamna", "Patharghata"],
    Patuakhali: [
      "Patuakhali Sadar",
      "Bauphal",
      "Dashmina",
      "Galachipa",
      "Kalapara",
      "Mirzaganj",
      "Rangabali",
    ],
    Pirojpur: [
      "Pirojpur Sadar",
      "Bhandaria",
      "Kawkhali",
      "Mathbaria",
      "Nazirpur",
      "Nesarabad (Swarupkathi)",
      "Zianagar",
    ],
    Dhaka: ["Dhamrai", "Dohar", "Keraniganj", "Nawabganj", "Savar"],
    Narayanganj: [
      "Araihazar",
      "Bandar",
      "Narayanganj Sadar",
      "Rupganj",
      "Sonargaon",
    ],
    Gazipur: ["Gazipur Sadar", "Kaliakair", "Kapasia", "Sreepur", "Kaliganj"],
    Tangail: [
      "Ghatail",
      "Kalihati",
      "Madhupur",
      "Mirzapur",
      "Nagarpur",
      "Sakhipur",
      "Basail",
      "Dhanbari",
      "Delduar",
      "Tangail Sadar",
    ],
    Manikganj: [
      "Manikganj Sadar",
      "Singair",
      "Saturia",
      "Shibalaya",
      "Harirampur",
      "Ghior",
      "Daulatpur",
    ],
    Munshiganj: [
      "Munshiganj Sadar",
      "Sreenagar",
      "Lohajang",
      "Sirajdikhan",
      "Tongibari",
      "Gazaria",
    ],
    Narsingdi: [
      "Narsingdi Sadar",
      "Belabo",
      "Monohardi",
      "Palash",
      "Raipura",
      "Shibpur",
    ],
    Faridpur: [
      "Faridpur Sadar",
      "Alfadanga",
      "Bhanga",
      "Boalmari",
      "Charbhadrasan",
      "Madhukhali",
      "Nagarkanda",
      "Sadarpur",
      "Shaltha",
    ],
    Madaripur: ["Madaripur Sadar", "Kalkini", "Rajoir", "Shibchar"],
    Shariatpur: [
      "Shariatpur Sadar",
      "Bhedarganj",
      "Damudya",
      "Gosairhat",
      "Naria",
      "Zanjira",
    ],
    Gopalganj: [
      "Gopalganj Sadar",
      "Kashiani",
      "Kotalipara",
      "Muksudpur",
      "Tungipara",
    ],
    Rajbari: [
      "Rajbari Sadar",
      "Baliakandi",
      "Goalandaghat",
      "Pangsha",
      "Kalukhali",
    ],
    Chittagong: [
      "Anwara",
      "Banshkhali",
      "Boalkhali",
      "Chandanaish",
      "Fatikchhari",
      "Hathazari",
      "Lohagara",
      "Mirsharai",
      "Patiya",
      "Rangunia",
      "Raozan",
      "Sandwip",
      "Satkania",
      "Sitakunda",
    ],
    Cox_Bazar: [
      "Chakaria",
      "Cox's Bazar Sadar",
      "Kutubdia",
      "Maheshkhali",
      "Pekua",
      "Ramu",
      "Teknaf",
      "Ukhiya",
    ],
    Cumilla: [
      "Barura",
      "Brahmanpara",
      "Burichang",
      "Chandina",
      "Cumilla Adarsha Sadar",
      "Cumilla Sadar Dakshin",
      "Daudkandi",
      "Debidwar",
      "Homna",
      "Laksam",
      "Meghna",
      "Monohorgonj",
      "Muradnagar",
      "Nangalkot",
      "Titas",
    ],
    Feni: [
      "Chhagalnaiya",
      "Daganbhuiyan",
      "Feni Sadar",
      "Parshuram",
      "Sonagazi",
      "Fulgazi",
    ],
    Noakhali: [
      "Begumganj",
      "Chatkhil",
      "Companiganj",
      "Hatiya",
      "Kabirhat",
      "Noakhali Sadar",
      "Senbagh",
      "Subarnachar",
    ],
    Brahmanbaria: [
      "Akhaura",
      "Bancharampur",
      "Brahmanbaria Sadar",
      "Kasba",
      "Nabinagar",
      "Nasirnagar",
      "Sarail",
    ],
    Chandpur: [
      "Chandpur Sadar",
      "Faridganj",
      "Haimchar",
      "Haziganj",
      "Kachua",
      "Matlab Dakshin",
      "Matlab Uttar",
      "Shahrasti",
    ],
    Lakshmipur: [
      "Lakshmipur Sadar",
      "Raipur",
      "Ramganj",
      "Ramgati",
      "Komolnagar",
    ],
    Khulna: [
      "Khulna Sadar",
      "Batiaghata",
      "Dacope",
      "Dumuria",
      "Dighalia",
      "Koyra",
      "Paikgachha",
      "Phultala",
      "Rupsa",
      "Terokhada",
    ],
    Bagerhat: [
      "Bagerhat Sadar",
      "Chitalmari",
      "Fakirhat",
      "Kachua",
      "Mollahat",
      "Mongla",
      "Morrelganj",
      "Rampal",
      "Sarankhola",
    ],
    Satkhira: [
      "Satkhira Sadar",
      "Assasuni",
      "Debhata",
      "Kaliganj",
      "Kolaroa",
      "Shyamnagar",
      "Tala",
    ],
    Rajshahi: [
      "Bagha",
      "Bagmara",
      "Charghat",
      "Durgapur",
      "Godagari",
      "Mohanpur",
      "Paba",
      "Puthia",
      "Tanore",
    ],
    Natore: [
      "Baraigram",
      "Gurudaspur",
      "Lalpur",
      "Naldanga",
      "Natore Sadar",
      "Singra",
    ],
    Naogaon: [
      "Atrai",
      "Badalgachhi",
      "Dhamoirhat",
      "Manda",
      "Mohadevpur",
      "Naogaon Sadar",
      "Niamatpur",
      "Patnitala",
      "Porsha",
      "Raninagar",
      "Sapahar",
    ],
    Pabna: [
      "Atgharia",
      "Bera",
      "Bhangura",
      "Chatmohar",
      "Faridpur",
      "Ishwardi",
      "Pabna Sadar",
      "Santhia",
      "Sujanagar",
    ],
    Bogura: [
      "Adamdighi",
      "Bogra Sadar",
      "Dhupchanchia",
      "Gabtali",
      "Kahaloo",
      "Nandigram",
      "Sariakandi",
      "Shajahanpur",
      "Sherpur",
      "Shibganj",
      "Sonatala",
    ],
    Joypurhat: ["Akkelpur", "Joypurhat Sadar", "Kalai", "Khetlal", "Panchbibi"],
    Sirajganj: [
      "Belkuchi",
      "Chauhali",
      "Kamarkhanda",
      "Kazipur",
      "Raiganj",
      "Shahjadpur",
      "Sirajganj Sadar",
      "Tarash",
      "Ullahpara",
    ],
    Rangpur: [
      "Badarganj",
      "Gangachara",
      "Kaunia",
      "Rangpur Sadar",
      "Mithapukur",
      "Pirgachha",
      "Pirganj",
      "Taraganj",
    ],
    Rangamati: [
      "Rangamati Sadar",
      "Belaichhari",
      "Bagaichhari",
      "Barkal Upazila",
      "Juraichhari",
      "Rajasthali",
      "Kaptai",
      "Langadu",
    ],
    Dinajpur: [
      "Birampur",
      "Birganj",
      "Biral",
      "Bochaganj",
      "Chirirbandar",
      "Dinajpur Sadar",
      "Ghoraghat",
      "Hakimpur",
      "Kaharole",
      "Khansama",
      "Nawabganj",
      "Parbatipur",
    ],
    Thakurgaon: [
      "Thakurgaon Sadar",
      "Baliadangi",
      "Haripur",
      "Pirganj",
      "Ranishankail",
    ],
  };

  const handleDivisionChange = (e) => {
    const selectedDivision = e.target.value;
    setDivision(selectedDivision);
    setDistricts(districtList[selectedDivision] || []);
    setDistrict("");
    setSubDistricts([]);
  };

  const handleDistrictChange = (e) => {
    const selectedDistrict = e.target.value;
    setDistrict(selectedDistrict);
    setSubDistricts(subDistrictList[selectedDistrict] || []);
  };

  return (
    <div className="w-screen">
      <form
        onSubmit={handleFormData}
        action=""
        className="w-1/3 mx-auto border  mt-[50px] p-2 shadow-sm shadow-red-200"
      >
        <h2 className="text-center py-3 text-[20px] mb-[20px] ">
          Are You Looking for Blood?
        </h2>

        <div className="w-full mb-[20px]  bg-slate-50 px-2 py-1">
          <label htmlFor="blood-group" className="text-[20px] me-[10px]">
            Select Blood Group
          </label>
          <select id="blood-group" name="group" className="outline-none">
            <option value="" className="text-[20px] ">
              Select Blood Group
            </option>
            <option value="A+" className="text-center">
              A+
            </option>
            <option value="A-" className="text-center">
              A-
            </option>
            <option value="B+" className="text-center">
              B+
            </option>
            <option value="B-" className="text-center">
              B-
            </option>
            <option value="O+" className="text-center">
              O+
            </option>
            <option value="O-" className="text-center">
              O-
            </option>
            <option value="AB+" className="text-center">
              AB+
            </option>
            <option value="AB-" className="text-center">
              AB-
            </option>
          </select>
        </div>

        <div className="w-full mb-[20px] bg-slate-50 px-2 py-1">
          <label htmlFor="division" className="text-[20px] me-[10px]">
            Select Division
          </label>
          <select
            id="division"
            value={division}
            onChange={handleDivisionChange}
            className="text-[20px] outline-none"
            name="division"
          >
            <option value="">Select Division</option>
            <option value="Barishal">Barishal</option>
            <option value="Chattogram">Chattogram</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Khulna">Khulna</option>
            <option value="Rajshahi">Rajshahi</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Mymensingh">Mymensingh</option>
            <option value="Sylhet">Sylhet</option>
          </select>
        </div>

        <div className="w-full mb-[20px] bg-slate-50 px-2 py-1">
          <label htmlFor="district" className="text-[20px] me-[10px]">
            Select District
          </label>
          <select
            disabled={!division}
            className="text-[20px]"
            id="district"
            onClick={handleDistrictChange}
            name="district"
          >
            <option value="">Select District</option>
            {districts.map((districtName) => (
              <option key={districtName} value={districtName}>
                {districtName}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full mb-[20px] bg-slate-50 px-2 py-1">
          <label htmlFor="subDistrict" className="text-[20px] me-[10px]">
            Select Sub District
          </label>
          <select
            id="subDistrict"
            disabled={!district}
            className="text-[20px]"
            name="sub_district"
          >
            <option value="">Select SubDistrict</option>
            {subDistricts.map((subDistrict) => (
              <option key={subDistrict} value={subDistrict}>
                {subDistrict}
              </option>
            ))}
          </select>
        </div>
        <input
          type="submit"
          value="submit"
          className="bg-green-700 px-[15px] py-[8px] rounded-md text-lime-50"
        />
      </form>
      <div>
        <div className="container mx-auto my-10 grid grid-cols-4 gap-x-5 gap-y-10">
          {searchData.map((donar) => (
            <DisplayDonar key={donar.donar_id} allDonar={donar}></DisplayDonar>
          ))}
        </div>

        <h3 className="text-center my-3 mt-10 text-[20px] text-red-700">
          {searchError}
        </h3>
      </div>
    </div>
  );
};

export default FindBlood;
