import React from "react";


export default function Footer() {
    return (
        <div className={'footer_layout'}>

            <div className={'footer_items'}>

                <section id={'footer_authors'}>
                    <a className={'footer_author'} href={'_blank'} rel="noreferrer">Samuel Bernát</a>
                    <a className={'footer_author'} href={'_blank'} rel="noreferrer">Adam Kozma</a>
                </section>

                <a href={githubPath} target="_blank" rel='noreferrer'>
                    <img id={'footer_github'} src={"github_icon.png"} alt={"Github project"}/>
                </a>

            </div>

        </div>
    )
}

/**
 * Link to github project.
 */
const githubPath = 'https://github.com/nellsam/crypto_wallet'