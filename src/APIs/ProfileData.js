const MyProfile =  async ({setData, setLoading}) => {
    setLoading(true);
    try{
        const response = await fetch('https://api.example.com/user={userId}');
        const json = await response.json();
        setData(json.data);
    } catch (error) {
        console.error("Failed to load data", error);
        setPosts([])
    }
    setLoading(false);
}
export default MyProfile;