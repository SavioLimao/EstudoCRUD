import { Link } from "react-router-dom"
import { StyledTitle } from "./styles"
import { useEffect, useState } from "react"

export const About = () => {
    const [status, setStatus] = useState<string | null>(null);
    
    // alguma lógica de status que precisa mudar a cor
    useEffect(() => {
        new Promise((resolve) => setTimeout(resolve, 2000))
            .then(() => setStatus("sucesso"));
    }, []);

    return (
        <div>
            <StyledTitle $textColor={status}>hello planet</StyledTitle>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, voluptatibus quam eum illum dolorem, laborum aperiam deserunt quas fugiat voluptatum, rem hic. Reiciendis recusandae eaque ab exercitationem asperiores itaque tempore voluptas rerum quae magni ea voluptatibus impedit pariatur, sint, corporis laudantium officia ipsum fugit harum molestiae? Eligendi ab cupiditate, hic laudantium saepe, eveniet porro veritatis, voluptate quia repudiandae nulla quo illo voluptatem delectus ipsam fugiat voluptatum minima sit! Modi omnis eius obcaecati molestiae voluptate quo nemo ex voluptatibus quaerat atque delectus ipsum praesentium incidunt amet fugiat nulla, consequuntur ad? Voluptates fugiat dignissimos dicta hic eligendi deleniti officiis debitis voluptatum mollitia.</p>
                <Link to={"/"}>Home</Link>
            </div>
        </div>
    )
}
