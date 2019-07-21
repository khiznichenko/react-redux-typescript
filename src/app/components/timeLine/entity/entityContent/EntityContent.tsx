import { IEntityData } from 'app/store/AppState';
import classNames from 'classnames';
import * as React from 'react';
import * as s from './EntityContent.css';

interface IEntityContentProps {
    text: string;
    isEditing: boolean;
    isNewEntity: boolean;
    onStartEdit(): void;
    onSave(text: IEntityData['text']): void;
}

interface IEntityContentState {
    text: string;
}

class EntityContent extends React.Component<IEntityContentProps, IEntityContentState> {
    private el: HTMLDivElement | undefined;
    constructor(props: IEntityContentProps) {
        super(props);

        this.state = {
            text: this.props.text,
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.onRender = this.onRender.bind(this);
    }

    public componentDidUpdate(): void {
        if (this.props.isEditing && this.el) {
            this.el.focus();
        }
    }

    public render() {
        const wrapClassNames = classNames(
            s.wrap,
            this.props.isEditing && s.editing,
        );
        return (
            <div
                className={wrapClassNames}
                contentEditable={this.props.isEditing}
                dangerouslySetInnerHTML={{ __html: this.state.text }}
                onClick={this.handleClick}
                onBlur={this.handleBlur}
                ref={this.onRender}
            />
        );
    }

    private onRender(el: HTMLDivElement) {
        this.el = el;
    }

    private handleClick() {
        if (!this.props.isEditing) {
            this.props.onStartEdit();
            if (this.props.isNewEntity) {
                this.setState({
                    text: '',
                });
            }
        }
    }

    private handleBlur() {
        const content = this.el && this.el.textContent;
        if (content) {
            this.props.onSave(content);
        }
    }
}

export default EntityContent;
