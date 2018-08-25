import React from 'react';
import { Container, Form, Item, Input, Label, Icon, Button, Text, Content, View} from 'native-base';
import Estilos from '../Css/Estilos';
import {Image} from 'react-native';
import { LinearGradient } from 'expo';
import { Grid, Row, Col } from 'react-native-easy-grid';
import { SimpleAnimation } from 'react-native-simple-animations';


export default class Registrar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Container>
                <LinearGradient colors={['#800080', '#000']} start={[0, 1]} end={[1, 0]} style={Estilos.Pantalla}>
                    <SimpleAnimation style={Estilos.Content} delay={100} duration={1000} staticType='zoom' movementType='spring' direction='left'>
                        <Content padder contentContainerStyle={Estilos.Content}>
                            <Grid>
                                <Row size={1} style={Estilos.End}>
                                    <Image source={require('../../assets/Add.png')} style={Estilos.Imagen} resizeMode='contain' />
                                </Row>
                                <Row size={1} style={Estilos.Start}>
                                    <Form style={[Estilos.Content, Estilos.CenterFlex]}>
                                        <Item floatingLabel last>
                                            <Icon name='pencil' style={Estilos.Color} type='FontAwesome' />
                                            <Label style={Estilos.Color}>Nombre Completo</Label>
                                            <Input style={Estilos.Color} />
                                        </Item>
                                        <Item floatingLabel last>
                                            <Icon name='email' style={Estilos.Color} type='Entypo' />
                                            <Label style={Estilos.Color}>Email</Label>
                                            <Input style={Estilos.Color} />
                                        </Item>
                                        <Item floatingLabel last>
                                            <Icon name='vpn-key' style={Estilos.Color} type='MaterialIcons' />
                                            <Label style={Estilos.Color}>Password</Label>
                                            <Input style={Estilos.Color} />
                                        </Item>
                                    </Form>
                                </Row>
                                <Row size={1} style={Estilos.End}>
                                    <Col style={[Estilos.CenterFlex]}>
                                        <Button iconLeft style={Estilos.Boton} block>
                                            <Icon name='add-box' type='MaterialIcons' />
                                            <Text>Registrar</Text>
                                        </Button>
                                        <Button iconLeft transparent block onPress={() => this.props.navigation.push('Login')}>
                                            <Icon name='arrow-left' type='FontAwesome' style={Estilos.Color}  />
                                            <Text style={Estilos.Color}>Cancelar</Text>
                                        </Button>
                                    </Col>
                                </Row>
                            </Grid>
                        </Content>
                    </SimpleAnimation>
                </LinearGradient>
            </Container>
        );
    }
}