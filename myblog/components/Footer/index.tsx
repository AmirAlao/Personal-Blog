import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import './Footer.css';

interface IProps {
    brand?: string;
}

const Footer: React.FC<IProps> = (props: IProps) => (
        <p className="footerText"> © Copyright { props.brand }. All Rights Reserved. 2021</p>
);

Footer.defaultProps = {
    brand: 'MyApp',
}

export default Footer;