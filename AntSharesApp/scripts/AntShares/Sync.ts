﻿namespace AntShares
{
    export class Sync
    {
        public static getblockcount(): void
        {
            Core.Blockchain.Default.getBlockCount().then(result =>
            {
                let remoteHeight = result - 1;
                $("#remote_height").text(remoteHeight);
                if (Global.Wallet)
                {
                    let localHeight = (Global.Wallet as any).walletHeight - 1;
                    let process = (localHeight / remoteHeight * 100).toFixed(0);
                    $("#local_process").text(process);
                    $("#local_height").text(localHeight);
                }
                setTimeout(Sync.getblockcount, 5000);
            }, reason => setTimeout(Sync.getblockcount, 5000));
        }
    }

    AntShares.Sync.getblockcount();
}
