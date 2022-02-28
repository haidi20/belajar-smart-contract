import json, os
from dotenv import load_dotenv
from web3 import Web3
from solcx import compile_standard, install_solc

load_dotenv()

install_solc("0.6.0")
with open("./SimpleStorage.sol", "r") as file:
    simple_storage_file = file.read()

# compile simple storage

compiled_sol = compile_standard(
    {
        "language": "Solidity",
        "sources": {
            "SimpleStorage.sol": {
                "content": simple_storage_file,
            },
        },
        "settings": {
            "outputSelection": {
                "*": {
                    "*": ["abi", "metadata", "evm.bytecode", "evm.sourceMap"],
                },
            }
        },
    },
    solc_version="0.6.0",
)

with open("compiled_code.json", "w") as file:
    json.dump(compiled_sol, file)

# get bytecode
byteCode = compiled_sol["contracts"]["SimpleStorage.sol"]["SimpleStorage"]["evm"][
    "bytecode"
]["object"]
# get abi
abi = compiled_sol["contracts"]["SimpleStorage.sol"]["SimpleStorage"]["abi"]

# connect to ganache
w3 = Web3(Web3.HTTPProvider("HTTP://127.0.0.1:7545"))
chain_id = 1337
my_address = os.getenv("MY_ADDRESS")
private_key = os.getenv("PRIVATE_KEY")

# Create contract in python
SimpleStorage = w3.eth.contract(abi=abi, bytecode=byteCode)

# get the latestest transaction
nonce = w3.eth.getTransactionCount(my_address)

# 1. Build a transaction
# 2. Sign a transaction
# 3. Send a transaction
transaction = SimpleStorage.constructor().buildTransaction(
    {
        "gasPrice": w3.eth.gas_price,
        "chainId": chain_id,
        "from": my_address,
        "nonce": nonce,
    }
)

signed_txn = w3.eth.account.sign_transaction(transaction, private_key=private_key)

# Send this signed transaction
tx_hash = w3.eth.send_raw_transaction(signed_txn.rawTransaction)
tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)

# Working with contract, you need:
# Contract ABI
# Contract Address
simple_storage = w3.eth.contract(address=tx_receipt.contractAddress, abi=abi)
# Call -> Simulate making the call and getting a return value
# Transact -> Actually make a state change
print(simple_storage.functions.store(15).call())
print(simple_storage.functions.getVal().call())
