import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.dynamic.svg';
import './GetStarted.scss';

export default () => {
    return (
        <div className="GetStarted">
            <header className="GetStarted__header">
                <div className="container GetStarted__header-content">
                    <Logo className="GetStarted__logo"/>
                    <h1 className="GetStarted__name">React Hot Reload Started</h1>
                    <nav className="GetStarted__menu">
                        <Link className="GetStarted__nav-link" to="/examples">Examples</Link>
                        <a className="GetStarted__nav-link" href="https://github.com/nikolaas/react-hot-reload-starter">
                            View on GitHub
                        </a>
                    </nav>
                </div>
            </header>
            <main className="container GetStarted__content">
                <section>
                    <h2 className="GetStarted__title">Getting Started</h2>
                    <p>
                        Starter shipped with next preinstalled libraries:
                        <ul>
                            <li><a href="https://reactjs.org/">React 16</a></li>
                            <li>
                                <a href="https://reacttraining.com/react-router/web/guides/philosophy">React Router 4</a>
                            </li>
                            <li><a href="https://redux.js.org/">Redux</a></li>
                            <li><a href="https://github.com/gaearon/redux-thunk">Redux Thunk</a></li>
                        </ul>
                    </p>
                    <p>
                        Starter supported hot reloading for JavaScript files and Sass files. For more information
                        about HMR see <a href="http://gaearon.github.io/react-hot-loader/">react-hot-loader</a> and{' '}
                        <a href="https://github.com/theKashey/react-imported-component">react-imported-component</a>.
                    </p>
                    <p>Also starter supported code splitting for async routes (see <strong>src/App.jsx</strong>).</p>
                    <h3 className="GetStarted__caption">Usage</h3>
                    <code className="GetStarted__code">
                        <span className="GetStarted__line">
                            git clone https://github.com/nikolaas/react-hot-reload-starter.git
                        </span>
                        <span className="GetStarted__line">cd react-hot-reload-starter</span>
                        <span className="GetStarted__line">npm install</span>
                        <span className="GetStarted__line">npm run dev</span>
                    </code>
                    <p>
                        Last command starts
                        {' '}<a href="https://webpack.js.org/configuration/dev-server/">Webpack Dev Server</a> on
                        address <a href="http://localhost:9000">http://localhost:9000</a>.
                    </p>
                    <h3 className="GetStarted__caption">Build</h3>
                    <p>Application is build using <a href="https://webpack.js.org/">Webpack 4</a>.</p>
                    <p>To build application you should run command:</p>
                    <code className="GetStarted__code">
                        <span className="GetStarted__line">npm run build</span>
                    </code>
                    <p>
                        The command run lining, testing and building of application. Result of building will be placed
                        in <strong>dist</strong> folder.
                    </p>
                    <p>If you want run only build without linting and testing, run command:</p>
                    <code className="GetStarted__code">
                        <span className="GetStarted__line">npm run build:only</span>
                    </code>
                    <h3 className="GetStarted__caption">Linting</h3>
                    <p>
                        Starter use <a href="https://eslint.org/">ESLint</a> with config based on{' '}
                        <a href="https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb">
                            Airbnb&apos;s eslint config
                        </a> for linting code.
                    </p>
                    <p>To linting code of application you should run command:</p>
                    <code className="GetStarted__code">
                        <span className="GetStarted__line">npm run lint</span>
                    </code>
                    <p>
                        In development mode ESLint emits warnings allowing you to focus on writing code and not being
                        distracted by fixing  ESLint&apos;s errors. But in production build ESLint will be emits errors
                        instead of warnings. That will lead to a failure of the build.
                    </p>
                    <h3 className="GetStarted__caption">Testing</h3>
                    Starter used <a href="https://facebook.github.io/jest/">Jest</a> and&nbsp;
                    <a href="http://airbnb.io/enzyme/">Enzyme</a> for testing. Tests placed
                    in <strong>test</strong> folder.
                    <p>To run tests you should run command:</p>
                    <code className="GetStarted__code">
                        <span className="GetStarted__line">npm run test</span>
                    </code>
                    <p>Updating jest snapshots:</p>
                    <code className="GetStarted__code">
                        <span className="GetStarted__line">npm run test:update</span>
                    </code>
                    <p>Generating code coverage:</p>
                    <code className="GetStarted__code">
                        <span className="GetStarted__line">npm run test:coverage</span>
                    </code>
                    <p>Debugging of tests:</p>
                    <code className="GetStarted__code">
                        <span className="GetStarted__line">npm run test:debug</span>
                    </code>
                    <h3 className="GetStarted__caption">Assets</h3>
                    <p>
                        Assets placed in <strong>src/assets</strong> folder.
                        You can use jpeg, jpg, png, gif and svg images by importing it in code.
                    </p>
                    <p>
                        By default svg files imported as usual image i.e. import expression returned relative path to
                        svg image and the file itself copied to <strong>dist/images</strong> folder.
                    </p>
                    <p>
                        If you need do some dynamic actions with svg image, for instance change color on hover
                        or add click handler, you can import your image as React Component. For this you should
                        add suffix &quot;.dynamic&quot; to end of file&apos;s name. For instance if you want
                        import svg image with name &quot;awesome-image.svg&quot; as React Component you should rename
                        your svg file to &quot;awesome-image.dynamic.svg&quot; ant then import it with common way:
                    </p>
                    <code className="GetStarted__code">
                        <span className="GetStarted__line">
                            import AwesomeImage from &apos;./path/to/your/awesome-image.dynamic.svg&apos;;
                        </span>
                    </code>
                    <p>
                        <strong>AwesomeImage</strong> is React Component and you can do with it too as with any other
                        React Component:
                    </p>
                    <code className="GetStarted__code">
                        <span className="GetStarted__line">
                            {'<AwesomeImage className="some-class" onClick={this.handleClick}/>'}
                        </span>
                    </code>
                    <h3 className="GetStarted__caption">Happy coding!</h3>
                </section>
            </main>
        </div>
    );
};
