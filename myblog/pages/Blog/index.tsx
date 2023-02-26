import { gql, useQuery } from '@apollo/client';
import * as React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Blog.css';

interface BlogPosts{
    id: string,
    title: string,
    excerpt: string,
    slug: string,
    coverImage: {
        fileName: string,
        url: string
    }
}

interface BlogData {
    posts: BlogPosts[];
}

const GET_BLOG_POSTS = gql`
 query GetBlogPosts {
    posts {
        id
        title
        excerpt
        slug
        coverImage {
          fileName
          url
        }
      }
   }
`;

const  Blog = () => {
    const { loading, data } = useQuery<BlogData>(GET_BLOG_POSTS);
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="blogTitle"> Blog</h1>
                    <p className="blogSubTitle">  Articles on Freelancing, Tech, Engineering,Products and Business </p>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                        <h4> Recent Articles : </h4>

                          <Row className="blogCardsContainer">
                                {data && data.posts.map(post => (
                                    <Card className="blogCard">
                                        <Card.Img variant="top" src={post.coverImage.url} alt={post.coverImage.fileName} />
                                        <Card.Body>
                                        <Card.Title>{post.title}</Card.Title>
                                        <Card.Text>
                                            {post.excerpt}
                                        </Card.Text>
                                          <Link to={`/post/${post.slug}`}>
                                              <Button variant="success" size="sm"> Read More</Button>
                                          </Link>
                                        </Card.Body>
                                        <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                        </Card.Footer>
                                    </Card>
                                ))}
                           </Row>

                </Col>
            </Row>
        </Container>
    )
}

export default Blog;