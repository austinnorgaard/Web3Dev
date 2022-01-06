from brownie import network, accounts, config, EnsembleBallot
from scripts.helpful_scripts import get_account

def deploy_ensemble_ballot():
    account = get_account()
    ensemble_ballot = EnsembleBallot.deploy({"from": account},
    publish_source=True)

def main():
    deploy_ensemble_ballot()
