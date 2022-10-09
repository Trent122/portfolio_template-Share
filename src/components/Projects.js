// Import Assets
import uniswap from '../assets/uniswap.png';
import compound from '../assets/compound.png';
import aave from '../assets/aave.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Blockpay</h3>
                    <img src={uniswap} alt="Uniswap Swap Page" />
                    <p>Blockpay is a payment software solution utilizing a customizable private blockchain network that allows for real-time payments between users 24/7/365.
                       Our research portrays that only 36% of small and medium-sized enterprises within Latin America have delivered digital initiatives,
                       and Blockpay can act as the steppingstone for their digital asset transformation. 
                       This lagging indicator depicts a significant gap in the world's adoption of digital business and blockchain practices.
                    </p>

                    <a href="https://blockpay.vercel.app/" target="_blank" className="button">Site</a>
                </div>

                <div className="projects__card">
                    <h3>Black-Jack</h3>
                    <img src={compound} alt="Compound Landing Page" />
                    <p>Black-Jack is a decentralized application that allows users to play blackjack with other users on the Ethereum blockchain.
                    </p>

                    <a href="https://blocktec.us/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/Trent122/Black-Jack-master" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>SupplyChain Tracker</h3>
                    <img src={aave} alt="Aave Landing Page" />
                    <p>SupplyChain Tracker is a decentralized application that allows users to track the supply chain of a product from the manufacturer to the consumer.
                        each part is trackable and can be traced back to the manufacturer. Along with receiving the product, the consumer can also rate the product.
                    </p>

                    <a href="https://blocktec.us/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/Trent122/supply-chain-Dapp/tree/main/supply-chain-tutorial/supply-chain-tutorial" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;