import React from 'react';
import ArticleInput from './ArticleInput';
import {action} from '@storybook/addon-actions'; 

export default {
    title: 'Molecules/ArticleInput',
    component: ArticleInput
};

const Template = (args) => (
    <div>
        <ArticleInput {...args} />
    </div>
);


export const Default = Template.bind({});
Default.args = {
    onAddArticles: action('onAddArticle')
};