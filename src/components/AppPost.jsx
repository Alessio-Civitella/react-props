import style from "./AppPost.module.css";
import AppButton from "./AppButton";
import CardPosts from "../data/data";

const AppPost = () => {
    return (
        <div className={style.body_card}>
            <div className={style.img_post}>
                <img src="/images.png" alt="post" />
            </div>
            
            <div className={style.description_post}>
                <h3>
                    Titolo del post
                </h3>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit architecto, quia quasi animi beatae fugiat unde dolore, perferendis distinctio numquam aliquid, soluta eveniet laborum dolor ducimus quae fugit obcaecati nemo.
                </p>
                <AppButton />
            </div>
            <div className={style.description_post}>
                <CardPosts />
            </div>
        </div>
    )
}

export default AppPost;