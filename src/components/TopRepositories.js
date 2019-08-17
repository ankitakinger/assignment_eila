import React from 'react';

const TopRepositories = (props) => {
    return (
        <div className="toprep-wrapper">
            <div className="toprep-sections" id="section1">
                <img src={props.topRep.owner.avatar_url} alt="owner-avatar" />
            </div>
            <div className="toprep-sections" id="section2">
                <div className="repname"><a href={props.topRep.html_url} target="_blank">{props.topRep.name}</a></div>
                <div className="repinfo">
                    <div><strong>Owner - </strong><a href={props.topRep.owner.html_url} target="_blank">{props.topRep.owner.login}</a></div>
                    <div><strong>Forks Count - </strong>{props.topRep.forks_count}</div>
                    <div><strong>Stars Count - </strong>{props.topRep.stargazers_count}</div>
                </div>
            </div>
        </div>
    );
}

export default TopRepositories;