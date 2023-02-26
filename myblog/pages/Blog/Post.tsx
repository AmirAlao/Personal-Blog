import { gql, useQuery } from '@apollo/client';
import * as React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Blog.css';

interface PostData{
    id: string,
    date: string,
    createdAt: string,
    title: string,
    excerpt: string,
    tags: string,
    slug: string,
    coverImage: {
      fileName: string,
      url: string
    },
    author: {
      name: string
    },
    content: {
      html: any
    }
}


const GET_BLOG_POST = gql`
    query getBlogPost($slug: String) {
        post (where: {slug: $slug}) {
            author {
               name
            }
            createdAt
            date
            id
            excerpt
            slug
            title
            tags
            coverImage{
                url
                fileName
            }
            content{
                html
            }
      }
    }
`;


interface RouteParams {
   slug: any
 }



const BlogPost: React.FC<RouteParams> = () => {
    // useQuery<Data>(Query, variables)
    const params = useParams<RouteParams>();
    const { loading, data } = useQuery<PostData>(GET_BLOG_POST, { variables : { slug: params.slug } });

    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="blogTitle"> Blog</h1>
                </Col>
            </Row>
            <Row>
                <Col lg={10} >
                    {loading ? (
                        <p>Loading ...</p>
                    ):(
                        <article className="blogArticle">
                            <h1 className="blogPostTitle"> {data.post.title}</h1>
                            <p className="blogPostSubtitle"> <p dangerouslySetInnerHTML= /></p>
                            <span className="blogPostCoverImageContainer">
                                <Image src={data.post.coverImage.url} alt={data.post.coverImage.fileName} className="blogPostCoverImage" />
                             </span>
                            <p dangerouslySetInnerHTML= />
                       </article>
                    )}

                </Col>
            </Row>
        </Container>
    )
}

export default BlogPost;