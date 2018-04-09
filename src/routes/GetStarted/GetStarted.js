import React from 'react';
import PropTypes from 'prop-types';
import { BaseLayout } from '../../components/BaseLayout';
import { Article } from '../../components/Article';
import './GetStarted.scss';

const Chapter = ({ title, children }) => (
    <section>
        {title && <h3 className="Chapter">{title}</h3>}
        {children}
    </section>
);
const Code = props => <code className="Code" {...props}/>;
const Line = props => <span className="Line" {...props}/>;

Chapter.propTypes = {
    title: PropTypes.any,
    children: PropTypes.any,
};

Chapter.defaultProps = {
    title: null,
    children: null,
};

export default () => {
    return (
        <BaseLayout>
            <Article title="Getting Started">
                <Chapter>
                    <p>
                        Starter shipped with next preinstalled libraries:
                    </p>
                    <ul>
                        <li><a href="https://reactjs.org/">React 16</a></li>
                        <li>
                            <a href="https://reacttraining.com/react-router/web/guides/philosophy">React Router 4</a>
                        </li>
                        <li><a href="https://redux.js.org/">Redux</a></li>
                        <li><a href="https://github.com/gaearon/redux-thunk">Redux Thunk</a></li>
                    </ul>
                    <p>
                        Starter supported hot reloading for JavaScript files and Sass files. For more information
                        about HMR see <a href="http://gaearon.github.io/react-hot-loader/">react-hot-loader</a> and{' '}
                        <a href="https://github.com/theKashey/react-imported-component">react-imported-component</a>.
                    </p>
                    <p>
                        Also starter supported code splitting for async routes (see <strong>src/App.jsx</strong>).
                    </p>
                </Chapter>
                <Chapter title="Usage">
                    <Code>
                        <Line>git clone https://github.com/nikolaas/react-hot-reload-starter.git</Line>
                        <Line>cd react-hot-reload-starter</Line>
                        <Line>npm install</Line>
                        <Line>npm run dev</Line>
                    </Code>
                    <p>
                        Last command starts
                        {' '}<a href="https://webpack.js.org/configuration/dev-server/">Webpack Dev Server</a> on
                        address <a href="http://localhost:9000">http://localhost:9000</a>.
                    </p>
                </Chapter>
                <Chapter title="Build">
                    <p>Application is build using <a href="https://webpack.js.org/">Webpack 4</a>.</p>
                    <p>To build application you should run command:</p>
                    <Code>
                        <Line>npm run build</Line>
                    </Code>
                    <p>
                        The command run lining, testing and building of application. Result of building
                        will be placed in <strong>dist</strong> folder.
                    </p>
                    <p>If you want run only build without linting and testing, run command:</p>
                    <Code>
                        <Line>npm run build:min</Line>
                    </Code>
                    <p>Command run building minified bundle.</p>
                    <p>Or you can run command:</p>
                    <Code>
                        <Line>npm run build:fat</Line>
                    </Code>
                    <p>Command run building not minified bundle.</p>
                    <p>To run the production build, execute the command:</p>
                    <Code>
                        <Line>npm start</Line>
                    </Code>
                    <p>
                        Command starts a simple static server on address{' '}
                        <a href="http://localhost:9000">http://localhost:9000</a>.
                    </p>
                </Chapter>
                <Chapter title="Linting">
                    <p>
                        Starter use <a href="https://eslint.org/">ESLint</a> with config based on{' '}
                        <a href="https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb">
                            Airbnb&apos;s eslint config
                        </a> for linting code.
                    </p>
                    <p>To linting code of application you should run command:</p>
                    <Code>
                        <Line>npm run lint</Line>
                    </Code>
                    <p>
                        In development mode ESLint emits warnings allowing you to focus on writing code
                        and not being distracted by fixing  ESLint&apos;s errors. But in production
                        build ESLint will be emits errors instead of warnings.
                        That will lead to a failure of the build.
                    </p>
                </Chapter>
                <Chapter title="Testing">
                    Starter used <a href="https://facebook.github.io/jest/">Jest</a> and&nbsp;
                    <a href="http://airbnb.io/enzyme/">Enzyme</a> for testing. Tests placed
                    in <strong>test</strong> folder.
                    <p>To run tests you should run command:</p>
                    <Code>
                        <Line>npm run test</Line>
                    </Code>
                    <p>Updating jest snapshots:</p>
                    <Code>
                        <Line>npm run test:update</Line>
                    </Code>
                    <p>Generating code coverage:</p>
                    <Code>
                        <Line>npm run test:coverage</Line>
                    </Code>
                    <p>Debugging of tests:</p>
                    <Code>
                        <Line>npm run test:debug</Line>
                    </Code>
                </Chapter>
                <Chapter title="Assets">
                    <p>
                        Assets placed in <strong>src/assets</strong> folder.
                        You can use jpeg, jpg, png, gif and svg images by importing it in code.
                    </p>
                    <p>
                        By default svg files imported as usual image i.e. import expression returned
                        relative path to svg image and the file itself copied to <strong>dist/images</strong>
                        folder.
                    </p>
                    <p>
                        If you need do some dynamic actions with svg image, for instance change color on hover
                        or add click handler, you can import your image as React Component. For this you should
                        add suffix &quot;.dynamic&quot; to end of file&apos;s name. For instance if you want
                        import svg image with name &quot;awesome-image.svg&quot; as React Component you should
                        rename your svg file to &quot;awesome-image.dynamic.svg&quot; ant then import it with
                        common way:
                    </p>
                    <Code>
                        <Line>import AwesomeImage from &apos;./path/to/your/awesome-image.dynamic.svg&apos;;</Line>
                    </Code>
                    <p>
                        <strong>AwesomeImage</strong> is React Component and you can do with it too as with
                        any other React Component:
                    </p>
                    <Code>
                        <Line>{'<AwesomeImage className="some-class" onClick={this.handleClick}/>'}</Line>
                    </Code>
                </Chapter>
                <Chapter title="Happy coding!"/>
                <h4>P.S. Sorry for my English</h4>
            </Article>
        </BaseLayout>
    );
};
