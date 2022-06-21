import { Col, Row, Image, Button} from 'antd';
import { useEffect, useState } from 'react';
import { getLogo } from '../../services/HeaderServices';
import './Header.css';

function Header(){
    const [logoUrl ,setLogoUrl] = useState('');
    const [logoHeaight ,setLogoHeaight] = useState('');
    useEffect(()=>{
        getLogo().then(({data})=>{
            setLogoUrl(data.logo.logo_img);
            setLogoHeaight(data.logo.logo_height)
        })
    },[])
    return <>
        <Row>
            <Col span={24} className="TopNav">
                <Row className='TopBarWrap' justify="space-between" align="center">
                    <Col  className='LocationBar'></Col>
                    <Col  className='LogoWrap'>
                        <Button type="link" style={{height:'100%'}}>
                            <Image style={{height:logoHeaight}} src={logoUrl}  preview={false}/>
                        </Button>
                    </Col>
                    <Col  className='ActionWrap'>sdas</Col>
                </Row> 
                <Row className='MenuWrap DeskMenu'></Row>
            </Col>
        </Row>
    </>
}

export default Header;