import {formatISO9075} from 'date-fns';
import { Link } from 'react-router-dom';

export default function Post({_id,title,summary,cover,content,createdAt,author }) {
    return(
        <div className="post">
          <div className="image">
            <Link to={`/post/${_id}`}>
              <img src={'http://localhost:4000/'+cover} alt=''/>
            </Link>
         </div>
        <div className="texts">
          <Link to={`/post/${_id}`}>
            <h2>{title}</h2>
          </Link>
          <p className="info">
            <a className="author">{author.username}</a>
            <time>{formatISO9075(new Date(createdAt), 'MMM d, yyyy HH:mm')}</time>
          </p>
          <p className="summary">{summary}</p>
        </div>
      </div>
    );
}
//GenAI earbuds can succeed where Humane and Rabbit stumbled-A month after launching its first product, Humane’s co-founders have reportedly put their well-funded startup on the market.