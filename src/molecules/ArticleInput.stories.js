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
    onAddArticles: action('onAddArticles')
};

export const WithAutoComplete = Template.bind({});
WithAutoComplete.args = {
    onAddArticles: action('onAddArticles'),
    articleNames: [
        "Bio Banane",
        "Apfel Pkg. 6 Stk.",
        "Speisequark 40%",
        "Sellerie",
        "Packing Bio Karotten"
    ],
}