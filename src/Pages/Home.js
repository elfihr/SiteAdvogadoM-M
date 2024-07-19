import React from 'react'
import "../styles/Home.css"
import build from '../assets/Building.png'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import { laywer } from '../helper/helper'


const Home = () => {
    return (
        <div className='Home'>
            {/* =========herosection========= */}
            <section className='hero' id='sobre'>
                <img className='heroImg' src={build} alt='predio de advocacia' />
                <div className='HeroContainer'>
                    <h3 className='title'>Sobre Nos</h3>
                    <p className='description'>
                        Fundado em 2017, Martins & Moura, Associação de Advogados, é um escritório de advocacia com sede na cidade do Rio de Janeiro. Nossa missão é oferecer serviços jurídicos de excelência, pautados pela ética, transparência e compromisso com os melhores interesses de nossos clientes.
                        <br /><br />
                        Com uma equipa composta por advogados altamente qualificados e especializados em diversas áreas do Direito, estamos preparados para atender às necessidades jurídicas de empresas e particulares, oferecendo soluções personalizadas e eficazes.
                        <br /><br />
                        No Martins & Associados, acreditamos que cada cliente é único e, por isso, dedicamos tempo e atenção para compreender suas necessidades específicas. Nosso compromisso é fornecer um serviço de alta qualidade, com soluções jurídicas eficientes e inovadoras, sempre com o objetivo de proteger os direitos e interesses dos nossos clientes.
                        <br /><br />
                    </p>
                </div>
            </section>
            {/* =========casessection========= */}
            <section className='cases' id='atuacao'>
                <h3 className='title'>Àrea de Atuação</h3>
                <div>
                    <p className='titledescription description'>
                        &#x2022; Adequação à LGPD - Lei Geral de Proteção de Dados - e implementação de programas de Compliance Digital
                        <br /><br />
                        &#x2022; Serviços especializados em direito digital - Atuamos na defesa de direitos e adequação às normas relacionadas à interne
                        <br /><br />
                        &#x2022; Assessoria jurídica em Direito Eleitoral e Administrativo, assessoria política e parlamentar.
                    </p>
                </div>

                <div className='wrapper'>
                    <p className='item item1'>Direito Civil </p>
                    <p className='item item2'>Direito Penal </p>
                    <p className='item item3'>Direito Trabalhista </p>
                    <p className='item item4'>Direito Empresarial </p>
                    <p className='item item5'>Direito Imobiliário </p>
                    <p className='item item6'>Direito Tributário </p>
                </div>

            </section>
            {/* =========laywersection========= */}
            <section className='laywer' id='advocados'>

                <h3 className='title'>Advogados</h3>
                <div className='layers'>
                    {laywer.map((laywer, index) => {
                        return (
                            <div key={index} className='laywerContainer'>
                                <img className='layerImg' src={laywer.image} alt='foto advogado' />
                                <h4>{laywer.name}</h4>
                                <p>{laywer.descriptions}</p>
                            </div>
                        )

                    })}
                </div>

            </section>
            {/* =========contactsection========= */}
            <section className='contato' id='contato'>
                <h3 className='title'>Contato</h3>
                <div className='contactFlex'>
                    <div className='contatoContainer'>
                        <div className='boxContact'>
                            <WhatsAppIcon className='whatIcon' fontSize='large' />
                            <a href='x' className='description'>(11) 9xxxx-xxxx</a>
                        </div>
                        <div className='boxContact'>
                            <EmailIcon className='whatIcon' fontSize='large' />
                            <a href='#' className='description'>advocados@mm.com</a>
                        </div>
                        <div className='boxContact'>
                            <LocalPhoneIcon className='whatIcon' fontSize='large' />
                            <a href='#' className='description'>(11) xxxx-xxxx</a>
                        </div>
                        <div className='separator'></div>
                        <div className='boxAdress'>
                            <AddLocationIcon className='whatIcon' fontSize='large' />
                            <p>Avenida Rio Branco - n163
                            <br/>
                            RJ - Brasil</p>
                      
                        </div>
                        
                    </div>
                    <iframe className='contactMap' width="400" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Brazil,rio%20de%20janeiro,av%20rio%20branco+(laywer)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>



                </div>


            </section>


        </div>
    )
}

export default Home
