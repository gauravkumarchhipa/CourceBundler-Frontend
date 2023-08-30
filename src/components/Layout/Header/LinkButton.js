import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const LinkButton = ({ url = "/", title = "Home", onClose }) => (
    <Link to={url} onClick={onClose}>
        <Button variant={'ghost'}>{title}</Button>
    </Link>
)