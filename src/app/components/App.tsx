import * as moment from 'moment';
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { addEntity, deleteEntity, saveEntity } from '../actions';
import { startEditing } from '../actions/uiActions';
import { DEFAULT_ENTITY_TEXT } from '../constants';
import { IAppState, IEntitiesData, IEntityData, IUIData } from '../store/AppState';
import Footer from './footer/Footer';
import Header from './header/Header';
import Layout from './layout/Layout';
import TimeLine from './timeLine/TimeLine';

interface IAppStateProps {
    entities: IEntitiesData;
    ui: IUIData;
}
interface IAppDispatchProps {
    addEntity(data: IEntityData): void;
    saveEntity(data: IEntityData): void;
    startEditing(id: IEntityData['id']): void;
    deleteEntity(id: IEntityData['id']): void;
}
type TAppProps = IAppStateProps & IAppDispatchProps;

const App: React.FC<TAppProps> = (props) => {
    const handleAddEntity = () => {
        const now = moment().format('x');
        props.addEntity({
            id: now,
            lastEdited: now,
            text: DEFAULT_ENTITY_TEXT,
        });
        window.scrollTo({
            behavior: 'smooth',
            top: document.body.scrollHeight,
        });
    };

    return (
        <Layout>
            <Header/>
            <TimeLine
                entities={props.entities}
                nowEditing={props.ui.nowEditing}
                onStartEdit={props.startEditing}
                onSave={props.saveEntity}
                onDelete={props.deleteEntity}
            />
            <Footer onAddEntity={handleAddEntity}/>
        </Layout>
    );
};

const mapState = (state: IAppState): IAppStateProps => {
    return {
        entities: state.entities,
        ui: state.ui,
    };
};
const mapDispatch = (dispatch: Dispatch): IAppDispatchProps => bindActionCreators({
    addEntity,
    deleteEntity,
    saveEntity,
    startEditing,
}, dispatch);

export default connect(mapState, mapDispatch)(App);
