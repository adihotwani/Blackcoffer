const MyPosts =  async ({setPosts, setLoading}) => {
    setLoading(true);
    try{
        const response = await fetch('https://api.example.com/user/posts');
        const json = await response.json();
        setPosts(json.data);
    } catch (error) {
        console.error("Failed to load posts", error);
        setPosts([])
    }
    setLoading(false);
}
export default MyPosts;