import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

import { useForm } from "react-hook-form";


import { Container, Title, Column, TitleSignUp, SubtitleSignUp, AcceptSignUp, AttentionLogin, LoginText, Wrapper, Row } from './styles';

const Create_account = () => {

    const navigate = useNavigate()

    const handleClickSignIn = () => {
        navigate('/login');
    };

    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (Data) => {
        const userId = Math.floor(Math.random() * 100) + 3;
        // Utilizar npx json-server --watch db.json --port 8001
        try {
          await api.post('/users', {id: userId,name: Data.name,email: Data.email,senha: Data.senha,});
          alert('Cadastro feito com sucesso!');
          handleClickSignIn();
        } catch (e) {
            alert('Houve um erro no cadastro!');
        }
      };

    console.log('errors', errors);

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleSignUp>Comece agora grátis</TitleSignUp>
                <SubtitleSignUp>Crie sua conta e make the change._</SubtitleSignUp>
                <form onSubmit={handleSubmit(onSubmit)}>
                <Input placeholder="Nome Completo" leftIcon={<MdPerson />} name="name"  control={control} />
                    {errors.email && <span>Nome Completo é obrigatório</span>}
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                    {errors.senha && <span>Senha é obrigatório</span>}
                    <Button title="Criar minha conta" variant="secondary" type="submit"/>
                </form>
                
                    <AcceptSignUp><br/>
                        Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e 
                        os Termos de Uso da DIO.
                    </AcceptSignUp>
                    <Row>
                    <AttentionLogin>Já tenho conta.</AttentionLogin>
                    <LoginText>
                        <a href='/login'> Fazer login</a>
                    </LoginText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Create_account }