import axios from "axios";

const CountPage = async () => {
    const countLocations = await axios.get("htpps://127.0.0.1:4000/locations")
    return countLocations?.data?.length;
}

export default CountPage;