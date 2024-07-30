import styles from './Post.module.css';

// interface Props {
//     author: string;
//     content: string;
// }

export function Post(props) {
    return (
        <div>
            <h1>
                {props.author}
            </h1>
            <p>
                {props.content}
            </p>
        </div>
    )
}