const posts = [
    {
      id: 1,
      title: "Titolo del Post",
      image: 'image1.jpg',
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
      tags: ["html", "css"],
      published: true,
    },
    {
      id: 2,
      title: "Titolo del Post",
      image: '',
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
      tags: ["js", "css"],
      published: true,
    },
    {
      id: 3,
      title: "Titolo del Post",
      image: '',
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
      tags: ["js", "php"],
      published: true,
    },
    {
      id: 4,
      title: "Titolo del Post",
      image: 'image3.jpg',
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
      tags: ["html"],
      published: false,
    },
  ];

  export default function CardPosts() {
    return (
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            {/* Verifica se l'immagine è presente */}
            {post.image && <img src={post.image} alt={post.title}/>}
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>
              <strong>Tags:</strong> {post.tags.join(", ")}
            </p>
            <p>
              <strong>Published:</strong> {post.published ? "Yes" : "No"}
            </p>
          </div>
        ))}
      </div>
    );
  }
  