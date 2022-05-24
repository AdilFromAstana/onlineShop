import React from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';

const Profile = () => {

    const tabbeds = [
    ]

    return (
        <Container>
            <Tabs defaultActiveKey="personalInfo" variant={'pills'} id="uncontrolled-tab-example" className="mb-3" >
                <Tab eventKey="personalInfo" title="Личная информация">
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, aperiam ratione provident nemo itaque dolorem neque! Quidem reiciendis non ipsum vel soluta, vero, eos in cupiditate tenetur accusantium explicabo consequatur!
                    </div>
                </Tab>
                <Tab eventKey="email" title="Email почта">
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, aperiam ratione provident nemo itaque dolorem neque! Quidem reiciendis non ipsum vel soluta, vero, eos in cupiditate tenetur accusantium explicabo consequatur!
                    </div>
                </Tab>
                <Tab eventKey="creditCarts" title="Карты">
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, aperiam ratione provident nemo itaque dolorem neque! Quidem reiciendis non ipsum vel soluta, vero, eos in cupiditate tenetur accusantium explicabo consequatur!
                    </div>
                </Tab>
                <Tab eventKey="adresses" title="Адреса">
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, aperiam ratione provident nemo itaque dolorem neque! Quidem reiciendis non ipsum vel soluta, vero, eos in cupiditate tenetur accusantium explicabo consequatur!
                    </div>
                </Tab>
                <Tab eventKey="addOrders" title="Все заказы">
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, aperiam ratione provident nemo itaque dolorem neque! Quidem reiciendis non ipsum vel soluta, vero, eos in cupiditate tenetur accusantium explicabo consequatur!
                    </div>
                </Tab>
            </Tabs>
        </Container>
    );
};

export default Profile;