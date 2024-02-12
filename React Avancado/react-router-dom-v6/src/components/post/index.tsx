import { useParams, useSearchParams } from "react-router-dom";

export const Post = () => {
    const params = useParams();
    const {id} = params;
    const [qs] = useSearchParams();

    return <div>
        <h1> Post {`Param : ${id}`} {`QS : ${qs.get('page')}`} </h1>
    </div>
}